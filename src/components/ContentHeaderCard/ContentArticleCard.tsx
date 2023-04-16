import { BoxProps, Flex, Image } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { RetrieveASingleARTICLE } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

export default function ContentArticleCard({ ...props }: BoxProps) {
  const { contentType, contentId } = useParams()

  const { data: contentDetails } = useGetAPI<RetrieveASingleARTICLE>({
    endpoint: `/content/${contentType}/${contentId}/`,
  })

  const { id, thumbnail, type } = contentDetails ?? {}

  return (
    <Flex
      pos="relative"
      borderRadius="8px"
      cursor="pointer"
      {...props}
      role="group"
      overflow="hidden"
      as={Link}
      to={`../../content/${type}/${id}`}
    >
      <Flex direction="column" pos="relative" h="100%" w="100%">
        <Flex
          pos="absolute"
          justify="center"
          align="center"
          w="100%"
          h="100%"
          borderRadius="8px"
        >
          <Image
            maxH="100%"
            w="100%"
            h="100%"
            src={thumbnail ?? ''}
            alt="thumbnail"
            transition="transform 1.5s ease"
            objectFit="cover"
            _groupHover={{ transform: 'scale(1.2)', border: 'red' }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
