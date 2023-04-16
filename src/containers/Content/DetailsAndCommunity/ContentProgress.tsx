import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASingleCHALLENGEVideo } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import { ContentProgressLoader } from './ContentProgressLoader'

export const ContentProgress = () => {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASingleCHALLENGEVideo>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  return isLoading ? (
    <ContentProgressLoader />
  ) : (
    <>
      {contentDetails?.progress && (
        <Flex direction="column" gap="16px">
          <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
            Progress
          </Text>

          <Flex>
            {contentDetails?.progress.results.map(progress => (
              <Flex>
                <Text>{progress.best_result}</Text>
                <Text>{progress}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </>
  )
}
