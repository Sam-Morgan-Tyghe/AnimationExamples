import { Flex, Modal, ModalContent, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import EmptyNotifications from '~/assets/icons/No_notifications.svg'
import { AnimateAllChildren } from '~/utils/animateChildren'
import { dummyNotificationsArray } from '~/utils/consts/consts'

import NotificationItem from '../NotificationItem'
import SVG from '../SVG'

type NotificationsListProps = {
  isOpen: boolean
  onClose: (b: boolean) => void
}

export default function NotificationList({
  isOpen,
  onClose,
}: NotificationsListProps) {
  const navigate = useNavigate()
  const emptyArr = ['']
  return (
    <Modal
      motionPreset="slideInRight"
      isOpen={isOpen}
      onClose={() => onClose(!isOpen)}
    >
      <ModalContent left="28.5%" top="5px">
        <Flex
          direction="column"
          w="450px"
          maxW="800px"
          maxH="80vh"
          bg="white"
          p="20px"
          borderRadius="8px"
          boxShadow="0px 8px 24px rgba(10, 32, 57, 0.09)"
          overflowY="scroll"
        >
          <Flex w="100%" justify="space-between" align="center">
            <Text fontWeight="900" fontSize="20px">
              Notifications
            </Text>
            <Text
              cursor="pointer"
              lineHeight="2px"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/notifications')}
            >
              See all
            </Text>
          </Flex>
          {emptyArr.length <= 0 ? (
            <Flex mt="60px" direction="column" align="center" gap="40px">
              <SVG src={EmptyNotifications} alt="No notifications" />
              <Text fontWeight="900" fontSize="24px">
                You don&apos;t have any notifications
              </Text>
            </Flex>
          ) : (
            <>
              <AnimateAllChildren transitionVelocity={5}>
                {dummyNotificationsArray.map(notification => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
              </AnimateAllChildren>
            </>
          )}
        </Flex>
      </ModalContent>
    </Modal>
  )
}
