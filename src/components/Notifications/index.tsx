import { Flex, Switch, Text } from '@chakra-ui/react'
import React from 'react'

export default function Notifications() {
  //To Do: Api calls for Switch
  return (
    <Flex
      direction="column"
      w="100%"
      justify="center"
      align="center"
      gap="40px"
    >
      <Flex w="495px">
        <Text color="neutral.975" fontWeight="900" fontSize="20px">
          Email Notification
        </Text>
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>New program added</Text>
        <Switch
          //   defaultChecked={privacySettings?.show_statistics}
          id="showStatistic"
          //   onChange={() => {
          //     patchPrivacySettings({
          //       show_statistics: !privacySettings?.show_statistics,
          //     }).then(() => refetch())
          //   }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>New workout Added</Text>
        <Switch
          //   defaultChecked={privacySettings?.show_challenges}
          id="showChallenges"
          //   onChange={() => {
          //     patchPrivacySettings({
          //       show_challenges: !privacySettings?.show_challenges,
          //     }).then(() => refetch())
          //   }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>New article added</Text>
        <Switch
          //   defaultChecked={privacySettings?.show_progress_pics}
          id="showProgressPhotos"
          //   onChange={() => {
          //     patchPrivacySettings({
          //       show_progress_pics: !privacySettings?.show_progress_pics,
          //     }).then(() => refetch())
          //   }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Mentioned in the comment</Text>
        <Switch
          //   defaultChecked={privacySettings?.show_profile}
          id="showProfile"
          //   onChange={() => {
          //     patchPrivacySettings({
          //       show_profile: !privacySettings?.show_profile,
          //     }).then(() => refetch())
          //   }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Reply on my comment</Text>
        <Switch
          //   defaultChecked={privacySettings?.show_profile}
          id="showProfile"
          //   onChange={() => {
          //     patchPrivacySettings({
          //       show_profile: !privacySettings?.show_profile,
          //     }).then(() => refetch())
          //   }}
        />
      </Flex>
    </Flex>
  )
}
