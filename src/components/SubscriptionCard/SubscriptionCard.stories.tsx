import { Flex } from '@chakra-ui/react'

import SubscriptionCard from '.'
import DumbellImage from '../../assets/images/dumbells1.png'
import DumbellImage2 from '../../assets/images/dumbells2.png'

export default {
  component: SubscriptionCard,
  title: 'components/Subscription-Card',
}

const monthlySub = {
  title: 'Monthly',
  amount: 10,
  interval: 'month',
  annualPrice: 120,
  saving: 0,
  image: DumbellImage,
}

const annualSub = {
  title: 'Annually',
  amount: 96,
  interval: 'year',
  annualPrice: 96,
  saving: 20,
  image: DumbellImage2,
}

export const SubscriptionCardView = () => (
  <Flex gap="8px">
    <SubscriptionCard {...monthlySub} />
    <SubscriptionCard {...annualSub} />
  </Flex>
)

export const SubscriptionCardViewSelected = () => (
  <Flex gap="8px">
    <SubscriptionCard {...monthlySub} isSelected={true} />
    <SubscriptionCard {...annualSub} />
  </Flex>
)
