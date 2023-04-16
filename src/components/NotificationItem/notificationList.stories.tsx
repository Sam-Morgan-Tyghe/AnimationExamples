import { dummyNotificationsArray } from '~/Utils/consts/consts'

import NotificationItem from '.'

export default {
  component: NotificationItem,
  title: 'NotifcationList/NotifcationList',
}

const Template = () => (
  <>
    {dummyNotificationsArray.map(notification => (
      <NotificationItem key={notification.id} {...notification} />
    ))}
  </>
)

export const Default = Template.bind({})
