import { BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RetrieveASinglePROGRAMAlongsideWithAssociatedVideos } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import BottomDetails from './BottomDetails'

export default function ContentProgramCard({ ...props }: BoxProps) {
  const [workoutCompleted, setWorkoutCompleted] = useState(0)
  const { contentType, contentId } = useParams()

  const { data: contentDetails } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}/`,
    })

  const {
    id,
    thumbnail,
    type,
    level = [],
    workouts = [],
    duration,
  } = contentDetails ?? {}

  useEffect(() => {
    const filteredWorkouts = workouts.filter(item => item.completed === true)
    setWorkoutCompleted(filteredWorkouts.length)
  }, [workouts])

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
                {`${workoutCompleted} of ${workouts?.length} workouts done`}
              </Text>
            </Flex>
          </Flex>
          <BottomDetails type={type} level={level} duration={duration} />
        </Flex>
      </Flex>
    </Flex>
  )
}
