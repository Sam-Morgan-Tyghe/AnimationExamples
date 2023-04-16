import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { RetrieveASingleWORKOUTVideo } from '~/api/types'
import { useGetAPI, usePostAPI } from '~/api/useHook'
import playIcon from '~/assets/icons/play.svg'
import skipIcon from '~/assets/icons/skip.svg'
import skipBackwards from '~/assets/icons/skipbackwards.svg'
import skipForwards from '~/assets/icons/skipforewards.svg'
import SVG from '~/components/SVG'
import Payment from '~/pages/Payment'

export function VideoModalPlayer() {
  const { contentType, contentId } = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isPaymentOpen,
    onOpen: onPaymentOpen,
    onClose: onPaymentClose,
  } = useDisclosure()
  const [hasPaid, setHasPaid] = useState(false)
  const spt = localStorage.getItem('spt')
  const [watchedStreakPosted, setWatchedStreakPosted] = useState(false)

  const { data: contentDetails } = useGetAPI<RetrieveASingleWORKOUTVideo>({
    endpoint: `/content/${contentType}/${contentId}/`,
  })
  const { mutateAsync: postWatchedStreak, isIdle } =
    usePostAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/streak/update/${contentType}/${contentId}/`,
    })

  const playerConfig = {
    file: {
      attributes: {
        controlsList: 'nodownload', // Disable download button
        cast: 'enabled',
        disableremoteplayback: false,
      },
      disableremoteplayback: false,
    },
  }
  const playerRef = useRef<ReactPlayer>(null)

  const skipForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 30)
    }
  }
  const skipToEnd = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getDuration())
    }
  }

  const skipBackward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 30)
    }
  }

  const videos = [
    contentDetails?.intro_video?.file ?? '',
    contentDetails?.warmup_video?.file ?? '',
    contentDetails?.workout_video?.file ?? '',
  ].filter(Boolean)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleVideoEnded = () => {
    if (currentVideoIndex < videos.length - 1) {
      // Go to the next video if there are more videos in the array
      setCurrentVideoIndex(currentVideoIndex => currentVideoIndex + 1)
    } else {
      // Close the player and reset the video index if this is the last video in the array
      setCurrentVideoIndex(0)
      onClose()
    }
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        const isSubscribed = user.attributes.isSubscribed
        setHasPaid(Boolean(isSubscribed))
      })
      .catch(err => console.log(err))
  }, [])

  const handleProgress = (state: any) => {
    const { played } = state
    const isLastVideo = currentVideoIndex === videos.length - 1
    const isAtLeast70Percent = played >= 0.7
    if (isAtLeast70Percent && isLastVideo && !watchedStreakPosted && isIdle) {
      postWatchedStreak().then(() => setWatchedStreakPosted(true))
    }
  }
  const VideoPlayer = () => (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent w="100%" h="100%">
        <ModalBody w="100%" h="100%">
          <Center w="100%" h="100%">
            <ReactPlayer
              url={videos[currentVideoIndex]}
              width="100%"
              height="100%"
              playing
              controls
              ref={playerRef}
              config={playerConfig}
              onProgress={handleProgress}
              onEnded={handleVideoEnded}
            />

            <SVG
              position="absolute"
              top="32px"
              left="64px"
              src={skipBackwards}
              onClick={skipBackward}
              alt=""
              cursor="pointer"
            />
            <SVG
              position="absolute"
              top="32px"
              left="100px"
              src={skipForwards}
              onClick={skipForward}
              alt=""
              cursor="pointer"
            />
            {currentVideoIndex === 0 && (
              <Button
                position="absolute"
                bottom="100px"
                right="100px" // src={skipForwards}
                leftIcon={<SVG src={skipIcon} alt="skip" />}
                onClick={skipToEnd}
                p="20px"
              >
                Skip Warm Up
              </Button>
            )}
          </Center>
          <Box w="50px" h="50px" onClick={onClose} cursor="pointer">
            <CloseIcon
              position="absolute"
              top="32px"
              right="32px"
              as={CloseIcon}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
  const PaymentModal = () => (
    <Modal
      isOpen={isPaymentOpen}
      onClose={onPaymentClose}
      size="2xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent padding="40px">
        <ModalBody>
          <Center>
            <Payment />
          </Center>
          <Box w="50px" h="50px" onClick={onPaymentClose} cursor="pointer">
            <CloseIcon
              position="absolute"
              top="32px"
              right="32px"
              as={CloseIcon}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  return (
    <>
      <Button
        ml="auto"
        variant="StartNow"
        leftIcon={<SVG src={playIcon} alt="playIcon" />}
        onClick={() => (hasPaid || spt ? onOpen() : onPaymentOpen())}
      >
        Start Now
      </Button>
      <PaymentModal />
      <VideoPlayer />
    </>
  )
}
