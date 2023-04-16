import { Flex } from '@chakra-ui/react'
import { GETWorkoutHistoryOfUserResult } from '~/api/types'
import { useGetInfiniteAPI } from '~/api/useHook'
import { AnimateAllChildren } from '~/utils/animateChildren'

import WorkoutCardThumbnail from '../WorkoutCard/WorkoutCardThumbnail'

type workoutHistoryProps = {
  count: number
  next: null
  previous: null
  results: GETWorkoutHistoryOfUserResult[]
}

export default function WorkoutHistory() {
  const { data } = useGetInfiniteAPI<workoutHistoryProps>({
    endpoint: '/content/workout/history/',
  })
  const workoutHistory =
    data?.pages?.flatMap(page => page?.results).filter(Boolean) ?? []
  return (
    <Flex h="100%" w="100%" gap="32px" flexWrap="wrap">
      <AnimateAllChildren>
        {workoutHistory?.map(workout => (
          <AnimateAllChildren transitionVelocity={5}>
            {workout.workouts.map(workout => (
              <WorkoutCardThumbnail
                key={workout.id}
                {...workout}
                w="320px"
                h="320px"
              />
            ))}
          </AnimateAllChildren>
        ))}
      </AnimateAllChildren>
    </Flex>
  )
}
