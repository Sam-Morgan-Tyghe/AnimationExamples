import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASingleWORKOUTVideo } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'

import { NextWorkoutLoader } from './NextWorkoutLoader'

export function NextWorkout() {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  return (
    <>
      {isLoading ? (
        <NextWorkoutLoader />
      ) : (
        contentDetails?.next_workout && (
          <Flex direction="column" gap="16px">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Next workout
            </Text>
            <Flex wrap="wrap">
              <WorkoutCardThumbnail
                {...contentDetails?.next_workout}
                w="100%"
                h="460px"
              />
            </Flex>
          </Flex>
        )
      )}
    </>
  )
}
