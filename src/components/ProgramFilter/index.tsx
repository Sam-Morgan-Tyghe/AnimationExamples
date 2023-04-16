import { Flex, Text } from '@chakra-ui/react'
import { AnimateAllChildren } from '~/utils/animateChildren'

type ProgramFilterType = {
  activeProgramFilter: string
  setActiveProgramFilter: (value: string) => void
  types: string[]
  flexStart?: boolean
}

export default function ProgramFilter({
  activeProgramFilter = 'All',
  setActiveProgramFilter,
  types,
  flexStart,
}: ProgramFilterType) {
  return (
    <Flex
      justify={flexStart ? 'flex-Start' : 'center'}
      align="center"
      borderBottom="1px solid #f5f6f7"
      gap="32px"
    >
      <AnimateAllChildren >
        {types.map(item => (
          <Text
            key={item}
            fontWeight="900"
            cursor="pointer"
            color={
              activeProgramFilter === item ? 'black' : 'rgba(0, 0, 0, 0.4)'
            }
            onClick={() => setActiveProgramFilter(item)}
            borderBottom={activeProgramFilter === item ? '3px solid' : 'none'}
          >
            {item}
          </Text>
        ))}
      </AnimateAllChildren>
    </Flex>
  )
}
