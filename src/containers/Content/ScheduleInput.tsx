import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Calendar, Value } from 'react-multi-date-picker'
import { formattedDates } from '~/utils/helper'

type inputProps = {
  allDates: string[] | undefined
  setPostDate: (s: string) => void
}

const ScheduleInput = ({ allDates, setPostDate }: inputProps) => {
  const [activeDate, setActiveDate] = useState<Value>(new Date().toDateString())
  return (
    <Box w="100%" h="408px" minW="440px" className="customDatePickerWidth">
      {allDates && (
        <Calendar
          value={activeDate}
          format="MM/DD/YYYY HH:mm:ss"
          weekDays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
          weekStartDayIndex={1}
          onChange={e => {
            setActiveDate(new Date(`${e}`))
            setPostDate(new Date(`${e}`).toDateString())
          }}
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
  )
}

export default ScheduleInput
