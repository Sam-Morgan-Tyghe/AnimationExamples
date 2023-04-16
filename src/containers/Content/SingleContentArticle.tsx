import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASingleARTICLE } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

export const SingleContentArticle = () => {
  const { contentType, contentId } = useParams()

  const { data: contentDetails } = useGetAPI<RetrieveASingleARTICLE>({
    endpoint: `/content/${contentType}/${contentId}`,
  })

  return (
    <Flex direction="column" w="100%" gap="16px">
      <Text
        dangerouslySetInnerHTML={{ __html: contentDetails?.content ?? '' }}
      />
    </Flex>
  )
}
