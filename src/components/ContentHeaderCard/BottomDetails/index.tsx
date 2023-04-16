import { Flex, Text } from '@chakra-ui/react'
import { Equipment } from '~/api/types'
import stopwatch from '~/assets/icons/StopwatchBlack.svg'
import Calendar from '~/assets/icons/calendar.svg'

import SVG from '../../SVG'
import LevelIcon from '../LevelIcon'

type BottomDetailsProps = {
  type?: string
  duration?: number | null
  level?: Equipment[]
}

export default function BottomDetails({
  type,
  duration,
  level,
}: BottomDetailsProps) {
  return (
    <Flex direction="row" justify="flex-end" gap="12px">
      {!!type && (
        <Flex
          justify="center"
          align="center"
          boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
          p="10px 16px"
          bg="white"
          borderRadius="8px"
        >
          <Text fontWeight="700" fontSize="14px">
            {type}
          </Text>
        </Flex>
      )}
      {!!level && <LevelIcon level={level[0]?.name} />}
      {!!duration && (
        <Flex
          justify="center"
          align="center"
          boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
          p="10px 16px"
          bg="white"
          borderRadius="8px"
          gap="12px"
        >
          {type === 'program' ? (
            <SVG src={Calendar} alt="" />
          ) : (
            <SVG src={stopwatch} alt="" />
          )}
          <Text fontWeight="700" fontSize="14px">
            {`${(duration / 60).toFixed(1)} min`}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}
