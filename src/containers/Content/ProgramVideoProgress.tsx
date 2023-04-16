import { Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASinglePROGRAMAlongsideWithAssociatedVideos } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'

import { ProgramVideoProgressLoader } from './ProgramVideoProgressLoader'

export function ProgramVideoProgress() {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  const completedWorkouts = contentDetails?.workouts.filter(
    workout => workout.completed,
  )
  const unCompletedWorkouts = contentDetails?.workouts.filter(
    workout => !workout.completed,
  )

  return isLoading ? (
    <ProgramVideoProgressLoader />
  ) : (
    <Flex direction="column" gap="16px" py="40px">
      <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
        Up Next
      </Text>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="32px"
      >
        {unCompletedWorkouts?.length && (
          <>
            <GridItem rowSpan={2} colSpan={3}>
              <WorkoutCardThumbnail {...unCompletedWorkouts[0]} h="648px" />
            </GridItem>
            {unCompletedWorkouts?.slice(1).map(workout => (
              <GridItem key={workout.id} rowSpan={1} colSpan={1}>
                <WorkoutCardThumbnail {...workout} height="320px" />
              </GridItem>
            ))}
          </>
        )}
      </Grid>
      {Boolean(completedWorkouts?.length) && (
        <>
          <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
            Completed
          </Text>
          <SimpleGrid columns={3} spacing="32px">
            {completedWorkouts?.map(content => (
              <WorkoutCardThumbnail
                key={content.id}
                {...content}
                height="320px"
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </Flex>
  )
}
