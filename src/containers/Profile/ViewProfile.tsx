import { Avatar, Flex, Image, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { GetListOfProgressPhotos, GetOtherUserProfile } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import moreHorizontalIcon from '~/assets/icons/MoreHorizontal.svg'
import SVG from '~/components/SVG'
import StatsList from '~/components/StatsList'
import { formatDate } from '~/utils/helper'

export default function Profile(): JSX.Element {
  const { userId } = useParams()
  const { data: otherUserProfile } = useGetAPI<GetOtherUserProfile>({
    endpoint: `/user/visit/${userId}/`,
  })
  const progressPhotos = useGetAPI<GetListOfProgressPhotos>({
    endpoint: `/user/${userId}/progress-photo`,
  })

  return (
    <Flex direction="column" align="center" gap="32px" w="100%">
      <Avatar
        w="120px"
        h="120px"
        src={otherUserProfile?.profile_photo}
        name={otherUserProfile?.full_name}
      />
      <Flex direction="column" align="center" gap="12px">
        <Text fontWeight="900" fontSize="32px">
          {otherUserProfile?.full_name}
        </Text>
        <Text
          fontWeight="400"
          fontSize="14px"
          color="black"
          opacity="0.4"
          letterSpacing="0.005em"
        >{`@${otherUserProfile?.username}`}</Text>
      </Flex>

      <Flex direction="row" justify="space-between" gap="150px" w="100%">
        <Flex direction="column" gap="16px" w="50%">
          <Flex direction="row" justify="space-between">
            <Text fontWeight="900" fontSize="20px" letterSpacing="0.01em">
              Statistic
            </Text>
          </Flex>
          <StatsList
            type="profile"
            statistics={otherUserProfile?.statistics ?? {}}
          />
        </Flex>
        <Flex direction="column" gap="40px" w="50%">
          <Flex direction="row" justify="space-between" align="center">
            <Text fontWeight="900" fontSize="20px" letterSpacing="0.01em">
              Progress
            </Text>
          </Flex>
          <Flex direction="column" gap="50px">
            {progressPhotos.data?.results.map(item => (
              <Flex key={item.id} direction="column" gap="16px">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="700" fontSize="16px">
                    {formatDate(String(item.created_at))}
                  </Text>
                  <Flex justify="center" align="center" cursor="pointer">
                    <SVG src={moreHorizontalIcon} alt="" />
                  </Flex>
                </Flex>
                <Flex flexWrap="wrap" justify="space-between" gap="8px">
                  <Image
                    w="160px"
                    h="160px"
                    borderRadius="8px"
                    src={item.front_image_url}
                    alt=""
                  />
                  <Image
                    w="160px"
                    h="160px"
                    borderRadius="8px"
                    src={item.side_image_url}
                    alt=""
                  />
                  <Image
                    w="160px"
                    h="160px"
                    borderRadius="8px"
                    src={item.back_image_url}
                    alt=""
                  />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
