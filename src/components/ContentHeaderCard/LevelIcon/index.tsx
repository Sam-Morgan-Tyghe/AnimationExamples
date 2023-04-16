import { Flex, Text } from '@chakra-ui/react'
import AdvancedLevel from '~/assets/icons/AdvancedLevel.svg'
import BeginnerLevel from '~/assets/icons/BeginnerLevel.svg'
import IntermediateLevel from '~/assets/icons/IntermediateLevel.svg'

import SVG from '../../SVG'

type levelIconProps = {
  level: string
}

export default function LevelIcon({ level }: levelIconProps) {
  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Beginner':
        return <SVG src={BeginnerLevel} alt="" />
      case 'Intermediate':
        return <SVG src={IntermediateLevel} alt="" />
      case 'Advanced':
        return <SVG src={AdvancedLevel} alt="" />
    }
  }

  return (
    <>
      {level !== undefined && (
        <Flex
          justify="center"
          align="center"
          boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
          p="10px 16px"
          bg="white"
          borderRadius="8px"
          gap="12px"
        >
          {getLevelIcon(level)}

          <Text fontWeight="700" fontSize="14px">
            {level}
          </Text>
        </Flex>
      )}
    </>
  )
}
