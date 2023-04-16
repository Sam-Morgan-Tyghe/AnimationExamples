import { BoxProps, Button, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NoWorkout from '~/assets/icons/no-workout.svg'

import SVG from '../SVG'

export default function NoWorkoutCard({ ...props }: BoxProps) {
  return (
    <VStack
      data-testid="noworkoutcard"
      gap="24px"
      py="60px"
      border="1.5px solid rgba(0, 0, 0, 0.1)"
      borderRadius="8px"
      {...props}
    >
      <VStack gap="24px">
        <SVG src={NoWorkout} alt="No Workout Icon" />
        <VStack gap="24px">
          <Text color="primary.neutral.975" fontWeight={900} fontSize="24px">
            No workouts for this day
          </Text>
          <Text color="secondary.black.100" opacity={0.4}>
            Assign one or just enjoy the rest of your day.
          </Text>
        </VStack>
      </VStack>
      <Button variant="primary" as={Link} to="/discover">
        Assign new workout
      </Button>
    </VStack>
  )
}
