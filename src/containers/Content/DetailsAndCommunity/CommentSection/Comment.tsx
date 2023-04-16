import { ChatIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { post, remove } from '~/api'
import {
  GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID,
  GetUserProfile,
} from '~/api/types'
import { useGetAPI, useGetInfiniteAPI, usePostAPI } from '~/api/useHook'
import NotFavorite from '~/assets/icons/favorite-heart.svg'
import Heart from '~/assets/icons/heart.svg'
import LoadingText from '~/components/LoadingText/LoadingText'
import SVG from '~/components/SVG'

import { CommentLoader } from './CommentLoader'
import { ReplySection } from './Replies'
import { AnimateAllChildren } from '~/utils/animateChildren'

export const CommentSection = (): JSX.Element => {
  const replyInputRef = useRef<HTMLDivElement>(null)

  const { data: user } = useGetAPI<GetUserProfile>({ endpoint: '/user/' })

  const { contentType, contentId } = useParams()
  const [baseActiveComment, setBaseActiveComment] = useState('')
  const [activeReplyId, setActiveReplyId] = useState('')
  const [activeComment, setActiveComment] = useState<
    | {
        id: string
        comment: string
      }
    | undefined
  >({ id: '', comment: '' })
  const [storedComments, setStoredComments] = useState<
    { id: string; comment: string }[]
  >([])
  const [sortByPopular, setSortByPopular] = useState(true)
  const [isReplyingToComment, setIsReplyingToComment] = useState<string[]>([])

  const removeStoredCommentById = (id: string) =>
    setStoredComments(
      storedComments.filter(({ id: cId }: { id: string }) => cId === id),
    )

  const addToStoredCommentById = ({
    id,
    comment,
  }: {
    id: string
    comment: string
  }) => {
    const index = storedComments.findIndex(comment => comment.id === id)
    const updatedComment = { id, comment, isActive: true }
    if (index === -1) {
      setStoredComments(storedComments.concat(updatedComment))
    } else {
      const updatedComments = storedComments.map((comment, i) => {
        if (i === index) {
          return updatedComment
        }
        return comment
      })
      setStoredComments(updatedComments)
    }
    setActiveComment(updatedComment)
  }

  const getActiveReplyById = (id: string) =>
    storedComments.find(comment => comment?.id === id)
  const [pageParam, setPageParam] = useState(1)

  const {
    data: commentDetails,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading: isLoadingCommentList,
  } = useGetInfiniteAPI<GETCOMMENTSOfPROGRAMURLCommentListGroupContentItemID>({
    endpoint: `/comment/list/${contentType}/${contentId}?sort=${
      sortByPopular ? 'popular' : 'recent'
    }`,
    data: { hasParams: true },
  })
  const flattenedCommentDetails =
    commentDetails?.pages?.flatMap(page => page?.results) ?? []

  const { mutate: addReply, isSuccess: isReplyPosted } = usePostAPI({
    endpoint: `/comment/${activeComment?.id}/reply/`,
    data: { comment: getActiveReplyById(activeReplyId)?.comment },
  })
  const { mutate: createComment, isSuccess: isCommentPosted } = usePostAPI({
    endpoint: `/comment/${contentType}/${contentId}/`,
    data: { comment: baseActiveComment },
  })

  useEffect(() => {
    if (isReplyPosted || isCommentPosted) {
      refetch()
      if (isCommentPosted) setBaseActiveComment('')
      if (isReplyPosted) removeStoredCommentById(activeReplyId)
    }
  }, [isReplyPosted, isCommentPosted])

  const toggleId = (id: string) => {
    replyInputRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    if (isReplyingToComment.includes(id)) {
      // If the ID is already in the array, remove it
      setIsReplyingToComment(
        isReplyingToComment.filter(existingId => existingId !== id),
      )
    } else {
      // If the ID is not in the array, add it
      setIsReplyingToComment([...isReplyingToComment, id])
    }
  }

  const sendReply = async (id: string) => {
    await setActiveReplyId(id)
    await addReply()
  }

  const postFavorite = async (id: string) => {
    try {
      await post(`/comment/like/${id}/`, {}).then(res => res.data)
      refetch()
    } catch (error) {
      console.error(error)
    }
  }
  const postUnFavorite = async (id: string) => {
    try {
      await remove(`/comment/like/${id}/`, {}).then(res => res.data)
      refetch()
    } catch (error) {
      console.error(error)
    }
  }
  const handleLike = (id: string, isFavorited: boolean) => {
    !isFavorited ? postFavorite(id) : postUnFavorite(id)
  }

  return (
    <>
      {isLoadingCommentList ? (
        <CommentLoader />
      ) : (
        <>
          <Flex direction="column" gap="40px" py="40px">
            <Flex direction="column" gap="24px">
              <Text
                color="primary.neutral.975"
                fontWeight={900}
                fontSize="20px"
              >
                Comments
              </Text>

              <Button onClick={() => setSortByPopular(!sortByPopular)}>
                Show {!sortByPopular ? 'Popular' : 'Most Recent'}
              </Button>

              <InputGroup bg="rgba(0, 0, 0, 0.1)" borderRadius="99px">
                <Input
                  variant="filled"
                  borderRadius="99px"
                  type="text"
                  placeholder={`Reply to ${contentType}`}
                  onChange={e => setBaseActiveComment(e.target.value)}
                />
                <InputRightElement
                  pointerEvents="auto"
                  onClick={() => createComment()}
                >
                  <ChatIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
              <AnimateAllChildren>
                {flattenedCommentDetails?.map(comment => {
                  return (
                    <Flex key={comment.id} direction="column">
                      <Flex key={comment.id} gap="18px">
                        <Avatar
                          src={comment.profile_photo ?? ''}
                          name={comment.full_name}
                          w={`${64 - 18}px`}
                        />
                        <Flex direction="column" gap="8px">
                          <Flex gap="8px">
                            <Text fontSize="16px" fontWeight={400}>
                              <strong>{comment.full_name}</strong>{' '}
                              {comment.comment}
                            </Text>
                          </Flex>
                          {comment.images.length > 0 &&
                            comment.images.map(image => (
                              <Image
                                key={image.id}
                                src={image.image_url}
                                alt=""
                              />
                            ))}
                          <Flex gap="16px">
                            <Text color="neutral.550">
                              {comment.created_at}
                            </Text>
                            <Text color="neutral.550">
                              {comment.total_likes} likes
                            </Text>
                            <Text
                              color="neutral.550"
                              fontWeight={800}
                              onClick={() => toggleId(comment.id)}
                            >
                              Reply
                            </Text>
                          </Flex>
                          {isReplyingToComment.includes(comment.id) ? (
                            <InputGroup
                              bg="rgba(0, 0, 0, 0.1)"
                              borderRadius="99px"
                              ref={replyInputRef}
                            >
                              <Input
                                variant="filled"
                                borderRadius="99px"
                                type="text"
                                placeholder={`Reply to ${comment.full_name}`}
                                onChange={e =>
                                  addToStoredCommentById({
                                    id: comment.id,
                                    comment: e.target.value,
                                  })
                                }
                              />
                              <InputRightElement
                                pointerEvents="auto"
                                onClick={() => sendReply(comment.id)}
                              >
                                <ChatIcon color="gray.300" />
                              </InputRightElement>
                            </InputGroup>
                          ) : (
                            <></>
                          )}
                        </Flex>

                        {user?.username !== comment?.username && (
                          <Button
                            onClick={() =>
                              handleLike(comment.id, comment.is_liked)
                            }
                            ml="auto"
                            bg="white"
                            w="40px"
                            h="40px"
                          >
                            <SVG
                              position="absolute"
                              src={comment?.is_liked ? Heart : NotFavorite}
                              alt="favorite"
                              cursor="pointer"
                              w="20px"
                              h="20px"
                              mr="auto"
                            />
                          </Button>
                        )}
                      </Flex>
                      {comment?.total_replies && comment?.total_replies > 0 ? (
                        <ReplySection
                          numberOfReplies={comment.total_replies ?? 0}
                          repliesFromComment={comment.replies}
                          commentId={comment.id}
                          comment={comment}
                        />
                      ) : (
                        <></>
                      )}
                    </Flex>
                  )
                })}
                {hasNextPage && (
                  <Flex gap="16px" alignItems="center" p="12px">
                    <Box w="10%" h="1px" bg="black" />
                    {!isFetchingNextPage ? (
                      <Text
                        cursor="pointer"
                        onClick={() => {
                          if (fetchNextPage && hasNextPage) {
                            setPageParam(pageParam + 1)
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
              </AnimateAllChildren>
            </Flex>
          </Flex>
        </>
      )}
    </>
  )
}
