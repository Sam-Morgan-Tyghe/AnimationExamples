import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import {
  GETParticipantsOfAWORKOUT,
  RetrieveASinglePROGRAMAlongsideWithAssociatedVideos,
} from '~/api/types'
import { useGetAPI, useGetInfiniteAPI } from '~/api/useHook'
import LoadingText from '~/components/LoadingText/LoadingText'
import { AnimateAllChildren } from '~/utils/animateChildren'

import { ParticipantsLoader } from './ParticipantsLoader'

export function Participants(): JSX.Element {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}`,
    })
  const {
    data: participants,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfiniteAPI<GETParticipantsOfAWORKOUT>({
    endpoint: `/content/participants/${contentType}/${contentId}`,
  })

  const participantsList =
    participants?.pages?.flatMap(page => page?.results).filter(Boolean) ?? []

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {isLoading ? (
        <ParticipantsLoader />
      ) : (
        <>
          {contentDetails?.participants && (
            <Flex direction="column" gap="16px">
              <Text
                color="primary.neutral.975"
                fontWeight={900}
                fontSize="20px"
              >
                People who participated
              </Text>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>People who participated</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex
                      direction="column"
                      gap="18px"
                      justifyContent="space-between"
                      p="18px"
                    >
                      <AnimateAllChildren
                        transitionVelocity={5}
                        withProps={false}
                      >
                        {participantsList.map(participant => (
                          <Flex
                            key={participant.id}
                            w="100%"
                            justifyContent="space-between"
                            _hover={{ bg: 'secondary.gray.10' }}
                            alignItems="center"
                            p="8px"
                            rounded="lg"
                            as={Link}
                            to={`/profile/${participant.id}`}
                          >
                            <Flex gap="18px" alignItems="center">
                              <Avatar
                                src={participant.profile_photo ?? ''}
                                name={participant.full_name}
                              />
                              <Text fontWeight={800}>
                                {participant.full_name}
                              </Text>
                            </Flex>
                            <ChevronRightIcon ml="auto" w="26px" h="26px" />
                          </Flex>
                        ))}
                      </AnimateAllChildren>
                      {hasNextPage && (
                        <Flex gap="16px" alignItems="center" py="12px">
                          <Box w="10%" h="1px" bg="black" />
                          {!isFetchingNextPage ? (
                            <Text
                              cursor="pointer"
                              onClick={() => {
                                if (fetchNextPage && hasNextPage) {
                                  fetchNextPage()
                                }
                              }}
                            >
                              Show more replies
                            </Text>
                          ) : (
                            <LoadingText text={'Loading More'} />
                          )}
                        </Flex>
                      )}
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
              {contentDetails?.participants?.total &&
                contentDetails?.participants?.profile_photos && (
                  <AvatarGroup
                    size="md"
                    max={3}
                    onClick={onOpen}
                    cursor="pointer"
                  >
                    {contentDetails?.participants.profile_photos.map(photo => (
                      <Avatar key={photo} src={photo ?? ''} />
                    ))}

                    {new Array(
                      contentDetails?.participants.total -
                        contentDetails?.participants.profile_photos.length,
                    )
                      .fill('-')
                      .map((_empty, i) => (
                        <Avatar key={i} src={_empty} />
                      ))}

                    {new Array(
                      contentDetails?.participants.total -
                        contentDetails?.participants.profile_photos.length,
                    )
                      .fill('-')
                      .map((_empty, i) => (
                        <Avatar key={i} src={_empty} />
                      ))}
                  </AvatarGroup>
                )}
            </Flex>
          )}
        </>
      )}
    </>
  )
}
