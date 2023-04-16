import { Center } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AnimateAllChildren } from '~/Utils/Animate'
import { dummyNotificationsArray } from '~/Utils/consts/consts'

import NotificationItem from '../NotificationItem'

export default {
  component: NotificationItem,
  title: 'Animations/NotifcationList',
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof AnimateAllChildren> = args => (
  <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
      {dummyNotificationsArray.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
      {dummyNotificationsArray.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </AnimateAllChildren>
  </Center>
)

export const Default = Template.bind({})

Default.args = {
  transitionDelayVelocity: 1,
  transitionLength: 0.9,
  transitionTiming: 'cubic-bezier(0.17, 0.55, 0.55, 1)',
  transitionDelay: 0.5,
  useInViewOnce: true,
  withProps: true,
}

// Create a template with custom animation settings
export const CustomAnimationSettings = Template.bind({})
CustomAnimationSettings.args = {
  transitionDelayVelocity: 0.8,
  transitionLength: 1.5,
  transitionTiming: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  transitionDelay: 0.1,
  useInViewOnce: false,
  withProps: true,
}

// Create a template with fast animation settings
export const FastAnimation = Template.bind({})
FastAnimation.args = {
  transitionDelayVelocity: 1.5,
  transitionLength: 0.5,
  transitionTiming: 'ease-out',
  transitionDelay: 0.3,
  useInViewOnce: true,
  withProps: false,
}

// Create a template with slow animation settings
export const SlowAnimation = Template.bind({})
SlowAnimation.args = {
  transitionDelayVelocity: 0.3,
  transitionLength: 2.0,
  transitionTiming: 'linear',
  transitionDelay: 0.5,
  useInViewOnce: false,
  withProps: true,
}

// Create a template with no animation settings
export const NoAnimation = Template.bind({})
NoAnimation.args = {
  transitionDelayVelocity: 0,
  transitionLength: 0,
  transitionTiming: 'ease',
  transitionDelay: 0,
  useInViewOnce: false,
  withProps: false,
}

// Create a template with a custom transition timing function
export const CustomTransitionTiming = Template.bind({})
CustomTransitionTiming.args = {
  transitionDelayVelocity: 1,
  transitionLength: 0.8,
  transitionTiming: 'steps(4, end)',
  transitionDelay: 0.2,
  useInViewOnce: true,
  withProps: true,
}

// Create a template with multiple items and delayed animation
export const MultipleItemsWithDelay = Template.bind({})
MultipleItemsWithDelay.args = {
  transitionDelayVelocity: 1.2,
  transitionLength: 0.7,
  transitionTiming: 'ease-in-out',
  transitionDelay: 0.2, // Use a function to set dynamic delay based on item index
  useInViewOnce: true,
  withProps: true,
}
