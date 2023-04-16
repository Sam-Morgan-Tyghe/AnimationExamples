import { Flex, Heading, Stat, StatHelpText, StatNumber } from '@chakra-ui/react'
import React from 'react'
import SVG from '~/components/SVG'

import FilledStarIcon from '../../assets/icons/star-filled.svg'
import StarIcon from '../../assets/icons/star.svg'

interface Props {
  icon: React.ReactNode
  number: number
  type?: string | number
  helpText: string
  change: number
  isFavoritable?: boolean
  isFavorited?: boolean
  plainStats?: boolean
}

function StatsListItem({
  icon,
  type,
  helpText,
  isFavoritable = false,
  isFavorited = false,
}: Props) {
  return (
    <Stat
      key={type}
      display="flex"
      w="100%"
      p="4"
      border="1px"
      borderColor="rgba(15, 21, 38, 0.04);"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="between"
        gap="4"
      >
        {isFavoritable &&
          (isFavorited ? (
            <SVG alt="" src={FilledStarIcon} />
          ) : (
            <SVG alt="" src={StarIcon} />
          ))}
        <Flex
          w="48px"
          h="48px"
          bgColor="black.5"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px"
        >
          {icon}
        </Flex>
        <span>
          <StatNumber>
            <Heading fontSize="md" fontWeight={'900'} whiteSpace="nowrap">
              {type?.toLocaleString().toUpperCase()}
            </Heading>
          </StatNumber>
          <StatHelpText
            color="black.40"
            opacity={1}
            fontWeight={700}
            letterSpacing="0.04em"
            mt="4px"
            mb="0"
            fontSize="xs"
          >
            {helpText.toUpperCase()}
          </StatHelpText>
        </span>
      </Flex>
    </Stat>
  )
}

export default StatsListItem
