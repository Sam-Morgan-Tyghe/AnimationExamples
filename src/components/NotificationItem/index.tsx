import { Avatar, Flex, Image, Text } from '@chakra-ui/react'
import notificationBell from '~/assets/icons/Reminder.svg'
import chatBubble from '~/assets/icons/chatBubble.svg'

import SVG from '../SVG'

type notificationItemProps = {
  id: number
  name: string
  descreption: string
  type: string
  date: string
  time: string
  dummyImage: string
}

export default function NotificationItem({
  name,
  descreption,
  type,
  date,
  time,
  dummyImage,
}: notificationItemProps) {
  const isComment = type === 'comment'
  return (
    <Flex
      w="412px"
      p="8px 16px 8px 8px"
      gap="16px"
      borderRadius="8px"
      cursor="pointer"
      align="center"
      _hover={{
        bg: 'rgba(15, 21, 38, 0.04)',
      }}
      _active={{
        bg: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Flex
        position="relative"
        w="72px"
        h="72px"
        justify="center"
        align="center"
      >
        {isComment ? (
          <Avatar src={dummyImage} name={name} w="72px" h="72px" />
        ) : (
          <Image
            src={dummyImage}
            objectFit="cover"
            w="72px"
            h="72px"
            borderRadius="8px"
          />
        )}

        <Flex
          position="absolute"
          bottom="0px"
          right="0px"
          w="24px"
          h="24px"
          bg="black"
          borderRadius="50%"
          justify="center"
          align="center"
        >
          {isComment ? (
            <SVG src={chatBubble} alt="" />
          ) : (
            <SVG src={notificationBell} alt="" />
          )}
        </Flex>
      </Flex>
      <Flex direction="column" gap="4px" p="4px 0px" maxW="312px">
        <p>
          <span style={{ fontWeight: '700' }}>{name}</span>{' '}
          <span style={isComment ? { fontWeight: '400' } : { fontWeight: 700 }}>
            {isComment ? 'replied to your comment:' : 'workout reminder:'}
          </span>{' '}
          {isComment ? (
            <span
              style={{ fontSize: '14px', opacity: '0.75' }}
            >{`"${descreption}"`}</span>
          ) : (
            <span style={{ fontSize: '14px', opacity: '0.75' }}>{time}</span>
          )}
        </p>
        <Text fontSize="14px" opacity="0.75">
          {date}
        </Text>
      </Flex>
    </Flex>
  )
}
