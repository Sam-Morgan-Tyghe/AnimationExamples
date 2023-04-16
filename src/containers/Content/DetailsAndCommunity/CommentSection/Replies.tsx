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
import { post, remove } from '~/api'
import {
  GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID,
  GetUserProfile,
  ReplyElement,
} from '~/api/types'
import { useGetAPI, useGetInfiniteAPI, usePostAPI } from '~/api/useHook'
import NotFavorite from '~/assets/icons/favorite-heart.svg'
import Heart from '~/assets/icons/heart.svg'
import LoadingText from '~/components/LoadingText/LoadingText'
import SVG from '~/components/SVG'
import { AnimateAllChildren } from '~/utils/animateChildren'

export function ReplySection({
  numberOfReplies,
  repliesFromComment,
  commentId,
  comment,
}: // children,
{
  numberOfReplies: number
  repliesFromComment?: ReplyElement[]
  // children: JSX.Element
  commentId: string
  comment: ReplyElement
}) {
  const replyInputRef = useRef<HTMLDivElement>(null)
  const { data: user } = useGetAPI<GetUserProfile>({ endpoint: '/user/' })

  const [showComments, setShowComments] = useState(false)
  const toggleComments = () => {
    setShowComments(!showComments)
  }
  const [isReplyingToComment, setIsReplyingToComment] = useState(false)
  const [baseActiveReply, setBaseActiveReply] = useState('')

  const { mutate: addReply, isSuccess: isReplyPosted } = usePostAPI({
    endpoint: `/comment/${comment?.id}/reply/`,
    data: { comment: baseActiveReply },
  })

  const {
    data: repliesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfiniteAPI<GETREPLIESOfTheCOMMENTURLCommentRepliesCommentID>({
    endpoint: `/comment/replies/${commentId}/?limit=10`,
    data: { hasParams: true },
  })
  const flattenedReplies =
    repliesData?.pages?.flatMap(page => page?.results).filter(Boolean) ?? []

  // const replies = flattenedReplies

  //  Fixes BE problem but then pagination count goes weird so loading more , loads nothing new to the user
  const replies = [...(repliesFromComment ?? []), ...flattenedReplies].filter(
    ({ id }, index, self) => index === self.findIndex(o => o.id === id),
  )

  // not the happiest solution , maybe want to refactor the reply child into this component so it only refetches the current reply
  // refetch doesnt reset the useGetInfiniteAPI hook

  useEffect(() => {
    if (isReplyPosted) {
      refetch()
      setBaseActiveReply('')
      setShowComments(false)
    }
  }, [isReplyPosted])

  const handleReplyClick = () => {
    setIsReplyingToComment(!isReplyingToComment)

    // Scroll to the reply input
    replyInputRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
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
    <Flex w="100%" direction="column" gap="16px" pl="64px">
      <Flex gap="16px" alignItems="center" py="12px">
        <Box w="10%" h="1px" bg="black" />
        <Text cursor="pointer" onClick={toggleComments}>
          {showComments ? 'Hide' : 'View'} {numberOfReplies} replies
        </Text>
      </Flex>
      {showComments && (
        <Flex w="100%" direction="column" gap="24px">
          <AnimateAllChildren>
            {replies?.map(comment => (
              <Flex key={comment.id} gap="18px" w="100%">
                <Avatar
                  src={comment?.profile_photo ?? ''}
                  name={comment?.full_name}
                />
                <Flex direction="column" gap="8px">
                  <Flex gap="8px">
                    <Text fontSize="16px" fontWeight={400}>
                      <strong>{comment?.full_name}</strong> {comment.comment}
                    </Text>
                  </Flex>
                  {comment.images.length > 0 &&
                    comment.images.map(image => (
                      <Image key={image.id} src={image.image_url} alt="" />
                    ))}
                  <Flex gap="16px">
                    <Text color="neutral.550">{comment.created_at}</Text>
                    <Text color="neutral.550">{comment.total_likes} likes</Text>
                    <Text
                      color="neutral.550"
                      fontWeight={800}
                      cursor="pointer"
                      onClick={() => handleReplyClick()}
                    >
                      Reply
                    </Text>
                  </Flex>
                </Flex>
                {user?.username !== comment?.username && (
                  <Button
                    ml="auto"
                    onClick={() => handleLike(comment.id, comment.is_liked)}
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
          <InputGroup ref={replyInputRef}>
            {isReplyingToComment ? (
              <>
                <Input
                  variant="filled"
                  type="text"
                  placeholder={`Reply to ${comment.full_name}`}
                  onChange={e => setBaseActiveReply(e.target.value)}
                />

                <InputRightElement
                  pointerEvents="auto"
                  onClick={() => addReply()}
                >
                  <ChatIcon color="gray.300" />
                </InputRightElement>
              </>
            ) : (
              <></>
            )}
          </InputGroup>
        </Flex>
      )}
    </Flex>
  )
}
