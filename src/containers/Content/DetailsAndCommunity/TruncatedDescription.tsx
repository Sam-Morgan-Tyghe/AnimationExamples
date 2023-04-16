import { Flex, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { RetrieveASinglePROGRAMAlongsideWithAssociatedVideos } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

export const TruncatedDescription = () => {
  const [showFullText, setShowFullText] = useState(false)

  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  const description = contentDetails?.description ?? ''

  const maxChars = 300

  if (description.length <= maxChars) {
    // If the description is shorter than or equal to the maximum length,
    // just render the entire description.
    return (
      <>
        {' '}
        {contentDetails?.description && (
          <Flex direction="column" gap="16px">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Description
            </Text>
            <Text>{description}</Text>
          </Flex>
        )}
      </>
    )
  }

  if (!showFullText) {
    // If the full description isn't currently visible, truncate it and add
    // a "show more" button.
    const truncatedText = description.slice(0, maxChars) + '...'
    return (
      <>
        {contentDetails?.description && (
          <Flex direction="column" gap="16px">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Description
            </Text>
            <Text>
              {truncatedText}
              <Text
                cursor="pointer"
                color="#F65A00"
                onClick={() => setShowFullText(true)}
              >
                Show more
              </Text>
            </Text>
          </Flex>
        )}
      </>
    )
  }

  // If the full description is currently visible, render it with no truncation
  // and no "show more" button.
  return (
    <>
      {isLoading ? (
        <Flex direction="column" gap="16px">
          <Skeleton>
            <Text>dummy text</Text>
          </Skeleton>
          <SkeletonText>
            <Text>dummy text</Text>
          </SkeletonText>
        </Flex>
      ) : (
        <>
          {contentDetails?.description && (
            <Flex direction="column" gap="16px">
              <Text
                color="primary.neutral.975"
                fontWeight={900}
                fontSize="20px"
              >
                Description
              </Text>
              <Text>{description}</Text>
            </Flex>
          )}
        </>
      )}
    </>
  )
}
