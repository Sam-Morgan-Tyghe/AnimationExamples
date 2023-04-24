import { Center } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AnimateAllChildren } from '~/utils/Animate'
import { dummyNotificationsArray } from '~/utils/consts/consts'

import NotificationItem from '../NotificationItem'

export default {
  component: NotificationItem,
  title: 'Animations/OnScroll',
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
  scrollOnView: false,
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
  offset: ['start end', 'end end'],
  shouldAnimateOpacity: true,
  shouldAnimateScaleX: false,
  shouldAnimateScaleY: false,
  shouldAnimateWidth: false,
  shouldAnimateHeight: false,
  shouldAnimateTranslateX: false,
  shouldAnimateTranslateY: false,
  shouldAnimateBackgroundColor: false,
  offSetOutputRange: ['100%', '0%'],
  transformOutputRange: ['0%', '100%'],
  bgColorOutputRange: ['#ff0000', '#ffffff'],
}