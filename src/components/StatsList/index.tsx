import { StatGroup, Text, useTheme } from '@chakra-ui/react'

import DumbellIcon from '../../assets/icons/dumbell.svg'
import LightningIcon from '../../assets/icons/lightning.svg'
import TrophyIcon from '../../assets/icons/trophy.svg'
import SVG from '../SVG'
import StatsListItem from '../StatsListItem'

type statisticsType = {
  completed_challenges?: string | number
  completed_workouts?: string | number
  current_streak?: string | number
}

type Props = {
  type?: string
  statistics?: statisticsType // Add `?` to make the `statistics` property optional
}

function StatsList({ statistics, type }: Props) {
  const theme = useTheme()

  return (
    <StatGroup
      display="flex"
      flexDirection={type === 'profile' ? 'column' : 'row'}
      flexWrap="wrap"
      w="100%"
      bgColor="white"
      boxShadow={theme.shadows.md}
      borderRadius={8}
    >
      {statistics ? (
        <>
          <StatsListItem
            icon={<SVG alt="" src={DumbellIcon} />}
            number={0}
            type={statistics.completed_workouts}
            helpText={'Completed'}
            change={0}
            plainStats={true}
          />
          <StatsListItem
            icon={<SVG alt="" src={LightningIcon} />}
            number={0}
            type={statistics.current_streak}
            helpText={'Workout streak'}
            change={0}
            plainStats={true}
          />
          <StatsListItem
            icon={<SVG alt="" src={TrophyIcon} />}
            number={0}
            type={statistics.completed_challenges}
            helpText={'Completed'}
            change={0}
            plainStats={true}
          />
        </>
      ) : (
        <Text fontSize="xl" fontFamily={theme.fonts.heading} m="20px" mb="auto">
          You don&apos;t have any stats yet.{' '}
        </Text>
      )}
    </StatGroup>
  )
}

export default StatsList
