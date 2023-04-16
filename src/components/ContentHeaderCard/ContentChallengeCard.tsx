import { BoxProps, Flex, Image } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { RetrieveASingleCHALLENGEVideo } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import BottomDetails from './BottomDetails'

export default function ContentChallengeCard({ ...props }: BoxProps) {
  const { contentType, contentId } = useParams()

  const { data: contentDetails } = useGetAPI<RetrieveASingleCHALLENGEVideo>({
    endpoint: `/content/${contentType}/${contentId}/`,
  })

  const { id, duration, thumbnail, type } = contentDetails ?? {}

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

        <Flex
          position="relative"
          h="100%"
          direction="column"
          justify="space-between"
          p="24px"
          zIndex="100"
        >
          <Flex align="center" justify="space-between">
            <Flex
              h="32px"
              justify="center"
              align="center"
              p="6px 12px"
              borderRadius="8px"
            />
          </Flex>
          <BottomDetails type={type} duration={duration} />
        </Flex>
      </Flex>
    </Flex>
  )
}
