import { Flex, Switch, Text } from '@chakra-ui/react'
import { PATCHPrivacySettings } from '~/api/types'
import { useGetAPI, usePassablePatchAPI } from '~/api/useHook'

export default function Privacy() {
  const { mutateAsync: patchPrivacySettings } = usePassablePatchAPI({
    endpoint: '/user/privacy-settings/',
  })

  const { data: privacySettings, refetch } = useGetAPI<PATCHPrivacySettings>({
    endpoint: '/user/privacy-settings/',
  })

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
          Privacy
        </Text>
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Show Statistics to others</Text>
        <Switch
          defaultChecked={privacySettings?.show_statistics}
          id="showStatistic"
          onChange={() => {
            patchPrivacySettings({
              show_statistics: !privacySettings?.show_statistics,
            }).then(() => refetch())
          }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Show challenges to others</Text>
        <Switch
          defaultChecked={privacySettings?.show_challenges}
          id="showChallenges"
          onChange={() => {
            patchPrivacySettings({
              show_challenges: !privacySettings?.show_challenges,
            }).then(() => refetch())
          }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Show progress photos to others</Text>
        <Switch
          defaultChecked={privacySettings?.show_progress_pics}
          id="showProgressPhotos"
          onChange={() => {
            patchPrivacySettings({
              show_progress_pics: !privacySettings?.show_progress_pics,
            }).then(() => refetch())
          }}
        />
      </Flex>
      <Flex w="495px" justify="space-between" align="center">
        <Text>Show profile to others</Text>
        <Switch
          defaultChecked={privacySettings?.show_profile}
          id="showProfile"
          onChange={() => {
            patchPrivacySettings({
              show_progress_pics: !privacySettings?.show_progress_pics,
            }).then(() => refetch())
          }}
        />
      </Flex>
    </Flex>
  )
}
