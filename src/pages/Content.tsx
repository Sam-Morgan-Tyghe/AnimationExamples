import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { post, remove } from '~/api'
import {
  RetrieveASingleARTICLE,
  RetrieveASingleWORKOUTVideo,
} from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import calenderIcon from '~/assets/icons/calendar.svg'
import NotFavorite from '~/assets/icons/favorite-heart.svg'
import Heart from '~/assets/icons/heart.svg'
import ContentArticleCard from '~/components/ContentHeaderCard/ContentArticleCard'
import ContentChallengeCard from '~/components/ContentHeaderCard/ContentChallengeCard'
import ContentProgramCard from '~/components/ContentHeaderCard/ContentProgramCard'
import ContentWorkoutCard from '~/components/ContentHeaderCard/ContentWorkoutCard'
import SVG from '~/components/SVG'
import ScheduleModal from '~/components/ScheduleModal'
import { SingleContentArticle } from '~/containers/Content/SingleContentArticle'
import { SingleContentProgram } from '~/containers/Content/SingleContentProgram'
import { SingleContentWorkout } from '~/containers/Content/SingleContentWorkout'
import { VideoModalPlayer } from '~/containers/Content/VideoModalPlayer'
import { goBack } from '~/utils/helper'

import { ContentLoading } from './ContentLoading'

export default function Content(): JSX.Element {
  const [isFavorited, setIsFavorited] = useState<boolean | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { contentType, contentId } = useParams()
  const isWorkout = contentType === 'workout'
  const isProgram = contentType === 'program'
  const isChallengeCard =
    contentType === 'challenge' || contentType === 'how-to'
  const isArticle = contentType === 'article' || contentType === 'recipe'

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/${contentType}/${contentId}/`,
    })
  const { data: contentArticleDetails } = useGetAPI<RetrieveASingleARTICLE>({
    endpoint: `/content/${contentType}/${contentId}/`,
  })

  useEffect(() => {
    setIsFavorited(contentDetails?.is_favourite ?? null)
  }, [contentDetails])

  const navigate = useNavigate()

  const postFavorite = async () => {
    try {
      await post(`/favourite/${contentType}/${contentId}/`, {}).then(
        res => res.data,
      )
    } catch (error) {
      console.error(error)
    }
  }
  const postUnFavorite = async () => {
    try {
      await remove(`/favourite/${contentType}/${contentId}/`, {}).then(
        res => res.data,
      )
    } catch (error) {
      console.error(error)
    }
  }

  const hasData = !!contentDetails

  return isLoading ? (
    <ContentLoading />
  ) : !hasData ? (
    <Text>No Content</Text>
  ) : (
    <Flex>
      <ChevronLeftIcon
        onClick={() => goBack(navigate)}
        cursor="pointer"
        w="50px"
        h="50px"
        mr="auto"
        position="absolute"
        left="8%"
      />

      {isFavorited !== null && (
        <Button
          position="absolute"
          right="8%"
          onClick={() => {
            !isFavorited ? postFavorite() : postUnFavorite()
            setIsFavorited(!isFavorited)
          }}
          bg="white"
          w="40px"
          h="40px"
        >
          <SVG
            position="absolute"
            src={isFavorited ? Heart : NotFavorite}
            alt="favorite"
            cursor="pointer"
            w="20px"
            h="20px"
            mr="auto"
          />
        </Button>
      )}
      <VStack w="100%" h="100%">
        <>
          {isProgram && <ContentProgramCard w="100%" h="460px" />}
          {isArticle && <ContentArticleCard w="100%" h="460px" />}
          {isWorkout && <ContentWorkoutCard w="100%" h="460px" />}
          {isChallengeCard && <ContentChallengeCard w="100%" h="460px" />}
        </>

        <Flex justifyContent="space-between" w="100%" py="56px" gap="16px">
          <Flex direction="column">
            <Heading
              as="h3"
              fontWeight="900"
              fontSize="24px"
              lineHeight="24px"
              textAlign="center"
              mb="36px"
            >
              {contentDetails?.title}
            </Heading>
            <Text>{contentArticleDetails?.created_at}</Text>
          </Flex>

          <>
            {!isArticle && !isProgram && <VideoModalPlayer />}
            {isWorkout && (
              <Flex
                cursor="pointer"
                align="center"
                justify="center"
                onClick={onOpen}
                mb="18px"
              >
                <SVG src={calenderIcon} alt="calender icon" />
              </Flex>
            )}
          </>
        </Flex>
        {isProgram ? (
          <Flex direction="column" justifyContent="flex-start" w="100%">
            <SingleContentProgram />
          </Flex>
        ) : isArticle ? (
          <SingleContentArticle />
        ) : (
          <SingleContentWorkout />
        )}
      </VStack>
      <ScheduleModal isOpen={isOpen} toggleModal={onClose} />
    </Flex>
  )
}
