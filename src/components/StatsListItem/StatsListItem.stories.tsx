import SVG from '~/components/SVG'

import StatsListItem from '.'
import DumbellIcon from '../../assets/icons/dumbell.svg'

export default {
  component: StatsListItem,
  title: 'components/Stats-List-Item',
}

const dummyData = {
  icon: <SVG alt="" src={DumbellIcon} />,
  number: 338,
  type: 'Workouts',
  helpText: 'Completed',
  change: -3,
  isLastItem: false,
}

export const StatsListItemView = () => <StatsListItem {...dummyData} />
