import { Flex, HStack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AnimateAllChildren } from '~/utils/animateChildren'
import { formattedDates } from '~/utils/helper'

import chevronLeft from '../../assets/icons/chevron-left.svg'
import chevronRight from '../../assets/icons/chevron-right.svg'
import SVG from '../SVG'

export default function DatePicker({ dateData }: { dateData: string[] }) {
  const [dayOffset, setdayOffset] = useState(0)
  const [dates, setDates] = useState([{ day: '', date: '', currentDate: '' }])

  const scheduleDates = dateData ?? [
    '2023-02-26',
    '2023-02-28',
    '2023-03-07',
    '2023-03-04',
  ]
  useEffect(() => {
    const newDates = Array.from(Array(7).keys()).map(idx => {
      const d = new Date()
      d.setDate(d.getDate() - d.getDay() + idx + dayOffset)
      const newD = String(d).split(' ')
      return {
        day: newD[0].substring(0, 1),
        date: newD[2],
        currentDate: d.toISOString(),
      }
    })
    setDates(newDates)
  }, [dayOffset])

  return (
    <Flex align="flex-end" gap="20px">
      <HStack
        onClick={() => setdayOffset(dayOffset - 7)}
        cursor="pointer"
        h="40px"
      >
        <SVG src={chevronLeft} alt="arrow-left" />
      </HStack>
      <AnimateAllChildren transitionVelocity={5}>
        {dates.map((item, idx) => (
          <DateBtns
            key={idx}
            day={item.day}
            date={item.date}
            currentDate={item.currentDate}
            scheduleDates={scheduleDates}
          />
        ))}
      </AnimateAllChildren>
      <HStack
        onClick={() => setdayOffset(dayOffset + 7)}
        cursor="pointer"
        h="40px"
      >
        <SVG src={chevronRight} alt="arrow-right" />
      </HStack>
    </Flex>
  )
}

type DateProps = {
  day: string
  date: string
  currentDate: string
  scheduleDates: string[]
}

function DateBtns({ day, date, currentDate, scheduleDates }: DateProps) {
  const d = new Date()
  const newDate = d.toISOString().split('T')[0]
  const newCurrentDate = currentDate.split('T')[0]
  const isCurrentDate = newDate === newCurrentDate
  const isScheduled = formattedDates(scheduleDates).includes(newCurrentDate)
  return (
    <Flex direction="column" align="center" gap="8px">
      <Text fontWeight="700" fontSize="12px" opacity="0.4">
        {day}
      </Text>
      <Flex
        justify="center"
        align="center"
        w="40px"
        h="40px"
        borderRadius="8px"
        border={isScheduled ? '3px solid' : 'none'}
        borderColor={isScheduled ? 'black' : 'none'}
        bg={isCurrentDate ? 'black' : 'white'}
        color={isCurrentDate ? 'white' : 'black'}
      >
        <Text fontWeight="700">{date}</Text>
      </Flex>
    </Flex>
  )
}
