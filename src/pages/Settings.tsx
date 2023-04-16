import { Flex, Text } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import LoginAndSecurity from '~/components/LoginAndSecurity'
import MoreTab from '~/components/MoreTab'
import Notifications from '~/components/Notifications'
import Privacy from '~/components/Privacy'
import ProgramFilter from '~/components/ProgramFilter'
import WorkoutHistory from '~/components/WorkoutHistory'
import { settingsFilterTypes } from '~/utils/consts/filterProgramTypes'

export default function Settings(): JSX.Element {
  const [userEmail, setUserEmail] = useState()
  const [activeProgramFilter, setActiveProgramFilter] =
    useState('Login and Security')

  const user = async () => {
    const user = await Auth.currentAuthenticatedUser()
    const email = user?.attributes?.email
    setUserEmail(email)
  }

  useEffect(() => {
    user()
  }, [])

  return (
    <Flex direction="column" justify="center" gap="40px">
      <Text
        textAlign="center"
        fontWeight="900"
        fontSize="32px"
        color="neutral.975"
      >
        Settings
      </Text>
      <ProgramFilter
        activeProgramFilter={activeProgramFilter}
        setActiveProgramFilter={setActiveProgramFilter}
        types={settingsFilterTypes}
      />
      {activeProgramFilter === 'Login and Security' && (
        <LoginAndSecurity email={userEmail} />
      )}
      {activeProgramFilter === 'Privacy' && <Privacy />}
      {activeProgramFilter === 'Notifications' && <Notifications />}
      {activeProgramFilter === 'Workout History' && <WorkoutHistory />}
      {activeProgramFilter === 'More' && <MoreTab />}
    </Flex>
  )
}
