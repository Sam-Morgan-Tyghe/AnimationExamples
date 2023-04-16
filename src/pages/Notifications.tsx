import { Flex, Text } from '@chakra-ui/react'
import EmptyNotifications from '~/assets/icons/No_notifications.svg'
import NotificationItem from '~/components/NotificationItem'
import SVG from '~/components/SVG'
import { dummyNotificationsArray } from '~/utils/consts/consts'

export default function NotificationsPage() {
  const emptyArr = []
  return (
    <Flex direction="column" gap="56px" justify="center" align="center">
      <Text fontWeight="900" fontSize="32px">
        Notifications
      </Text>
      {emptyArr.length <= 0 ? (
        <Flex mt="60px" direction="column" align="center" gap="40px">
          <SVG src={EmptyNotifications} alt="No notifications" />
          <Text fontWeight="900" fontSize="24px">
            You don&apos;t have any notifications
          </Text>
        </Flex>
      ) : (
        <>
          {dummyNotificationsArray.map(notification => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </>
      )}
    </Flex>
  )
}
