import { Center } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import LoginFormContainer from '../containers/LoginFormContainer'
import WelcomeLayout from '../layouts/WelcomeLayout'

export default function Login(): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await Auth.currentAuthenticatedUser()

        navigate('/', { replace: true })
      } catch (err) {
        console.log(err)
        // User is not logged in, so do nothing
      }
    }
    checkAuthState()
  }, [])

  return (
    <WelcomeLayout>
      <Center
        m="auto"
        h="100%"
        w={{ base: '100%', md: '80%', lg: '60%' }}
        maxW="500px"
      >
        <LoginFormContainer />
      </Center>
    </WelcomeLayout>
  )
}
