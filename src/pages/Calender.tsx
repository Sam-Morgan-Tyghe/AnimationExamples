import {
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import type { Value } from 'react-multi-date-picker'
import { Calendar } from 'react-multi-date-picker'
import { Link } from 'react-router-dom'
import { GETALLSCHEDULEDatesWithWorkoutInfo } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import NoWorkoutCard from '~/components/NoWorkoutCard'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'
import { formattedDates } from '~/utils/helper'

export default function Calender(): JSX.Element {
  const [activeDate, setActiveDate] = useState<Value>(new Date().toDateString())
  const { data: allDates } = useGetAPI<string[]>({
    endpoint: '/schedule/dates/',
  })
  const {
    data: workoutInfo,
    isLoading: isLoadingWorkoutInfo,
    isFetching: isFetchingWorkoutInfo,
  } = useGetAPI<GETALLSCHEDULEDatesWithWorkoutInfo>({
    endpoint: `/schedule/workout/?scheduled_at__ltet=${activeDate}`,
    config: { dontKeepPreviousData: true },
  })

  const filteredWorkoutInfo = workoutInfo?.results.filter(workout => {
    return (
      new Date(workout.scheduled_at ?? '').toDateString() ==
      new Date(`${activeDate}`).toDateString()
    )
  })

  return (
    <VStack gap="80px" pb="156px">
      <Text fontSize="32px" fontWeight="900" color="secondary.black.100">
        Calender
      </Text>
      <Flex gap="64px">
        <Box w="100%" h="408px" minW="440px" className="customDatePickerWidth">
          {allDates && (
            <Calendar
              value={activeDate}
              format="YYYY-MM-DD"
              weekDays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
              weekStartDayIndex={1}
              onChange={setActiveDate}
              mapDays={({ date }) => {
                const props = { className: '' }
                const formatDate = date.format('YYYY-MM-DD')

                if (formattedDates(allDates ?? [])?.includes(formatDate)) {
                  props.className = 'highlight scheduled-dates'
                }

                return props
              }}
            />
          )}
        </Box>
        <VStack w="100%" gap="32px">
          {isLoadingWorkoutInfo || isFetchingWorkoutInfo ? (
            <Center h="497px" w="497px">
              <Spinner />
              <Text>Loading</Text>
            </Center>
          ) : filteredWorkoutInfo?.length ? (
            <>
              <SimpleGrid
                columns={1}
                overflow="scroll"
                h="497px"
                w="497px"
                spacing="16px"
              >
                {filteredWorkoutInfo?.map(workout => (
                  <WorkoutCardThumbnail {...workout} h="497px" w="497px" />
                ))}
              </SimpleGrid>
              <Button w="100%" variant="primary" as={Link} to="/discover">
                New workout
              </Button>
            </>
          ) : (
            <NoWorkoutCard h="497px" w="497px" />
          )}
        </VStack>
      </Flex>
    </VStack>
  )
}
