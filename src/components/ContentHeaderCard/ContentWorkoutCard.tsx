import { BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { RetrieveASingleWORKOUTVideo } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import BottomDetails from './BottomDetails'

type WorkoutCardProps = {
  locked?: boolean
}

export default function ContentWorkoutCard({
  locked,
  ...props
}: WorkoutCardProps & BoxProps) {
  const { contentType, contentId } = useParams()

  const { data: workoutDetails } = useGetAPI<RetrieveASingleWORKOUTVideo>({
    endpoint: `/content/${contentType}/${contentId}/`,
  })

  const { duration, thumbnail, type, day, level } = workoutDetails ?? {}

  return (
    <Flex
      pos="relative"
      borderRadius="8px"
      cursor="pointer"
      {...props}
      role="group"
      overflow="hidden"
      as={Link}
      to={`../../content/${contentType}/${contentId}`}
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
            filter={locked ? 'grayscale(1)' : 'none'}
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
            {!!day && (
              <Flex
                h="32px"
                justify="center"
                align="center"
                bg="white"
                p="6px 12px"
                boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
                borderRadius="8px"
              >
                <Text
                  fontFamily="Helvetica"
                  fontSize="14px"
                  fontWeight="700"
                  lineHeight="20px"
                >
                  {day}
                </Text>
              </Flex>
            )}
          </Flex>
          <BottomDetails type={type} level={level} duration={duration} />
        </Flex>
      </Flex>
    </Flex>
  )
}
