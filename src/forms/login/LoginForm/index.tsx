import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { Auth, Hub } from 'aws-amplify'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetMyUSERDetailsUser } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import LoadingDots from '~/components/LoadingDots'
import SVG from '~/components/SVG'

import AppleIcon from '../../../assets/icons/apple.svg'
import GoogleIcon from '../../../assets/icons/google.svg'
import ErrorMessage from '../../../components/Inputs/ErrorMessage'
import FormInput from '../../../components/Inputs/FormInput'
import { loginPageTypes } from '../../../utils/consts/loginPageTypes'
import { emailValidation, initialValues, loginValidation } from './validation'

type LoginFormProps = {
  setPageByKey: (page: string) => void
  setLoginUser: (user: {
    username: string
    attributes: { email: string }
  }) => void
  setPassword: (password: string) => void
}

export default function LoginForm({
  setPageByKey,
  setLoginUser,
  setPassword,
}: LoginFormProps) {
  const [user, setUser] = useState<{
    username: string
    attributes: { email: string }
  } | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSignUp, setIsSignUp] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [isLoadingState, toggleLoadingState] = useState(false)
  const navigate = useNavigate()
  const { data: getUser } = useGetAPI<GetMyUSERDetailsUser>({
    endpoint: `/user/`,
  })

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log('event', event)
      switch (event) {
        case 'signIn':
          setUser(data)
          break
        case 'signOut':
          setUser(null)
          break
      }
    })

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => setUser(null))

    return unsubscribe
  }, [])

  const isUsernameAvailable = async (username: string) => {
    try {
      await Auth.confirmSignUp(username, '000000', {
        forceAliasCreation: false,
      })
      return false
    } catch (err: any) {
      console.log('err.code', err.code)
      switch (err.code) {
        case 'UserNotFoundException':
          return true
        case 'NotAuthorizedException':
        case 'AliasExistsException':
        case 'CodeMismatchException':
        case 'ExpiredCodeException':
          return false
        default:
          return false
      }
    }
  }

  const handleFormTypeSelection = async (email: string) => {
    if (await isUsernameAvailable(email)) {
      setIsSignIn(false)
      setIsSignUp(true)
    } else {
      setIsSignIn(true)
      setIsSignUp(false)
    }
  }

  const handleSignup = async (values: { email: string; password: string }) => {
    toggleLoadingState(true)
    try {
      const data = await Auth.signUp({
        username: values.email,
        password: values.password,
      })
      // TODO:TECH DEBT remove any and resolve typing
      const user = data.user

      if (user) {
        await setLoginUser(user as any)
        setPageByKey(loginPageTypes.SignUpConfirm)
      }
    } catch (error: any) {
      setErrorMessage(error?.message)
    }
    toggleLoadingState(false)
  }

  const handleLogin = async (values: any) => {
    toggleLoadingState(true)
    try {
      const user = await Auth.signIn(values.email, values.password)
      setUser(user)
      if (getUser?.id) {
        navigate('/')
      } else {
        setPageByKey(loginPageTypes.PersonalInfo)
      }
    } catch (error: any) {
      setErrorMessage(error?.message)
    }
    toggleLoadingState(false)
  }

  async function signOut() {
    try {
      await Auth.signOut()
      setUser(null)
    } catch (error: any) {
      setErrorMessage(error?.message)
    }
  }

  // function signinCallback(authResult: { [x: string]: any }) {
  //   if (authResult['status']['signed_in']) {
  //     // Add the Google access token to the Amazon Cognito credentials login map.
  //     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  //       IdentityPoolId: 'IDENTITY_POOL_ID',
  //       Logins: {
  //         'accounts.google.com': authResult['id_token'],
  //       },
  //     })

  //     // Obtain AWS credentials
  //     AWS.config.credentials.get(function () {
  //       // Access AWS resources here.
  //     })
  //   }
  // }
  const signInWith = async (provider: CognitoHostedUIIdentityProvider) => {
    try {
      // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#subscribing-events
      await Auth.federatedSignIn({ provider })
    } catch (error: any) {
      setErrorMessage(error?.message)
    }
  }
  const handleSubmit = (values: { email: string; password: string }) => {
    setPassword(values.password)
    if (isSignIn || isSignUp) {
      if (isSignIn) {
        handleLogin(values)
      } else {
        handleSignup(values)
      }
    } else {
      handleFormTypeSelection(values.email)
    }
  }

  return (
    <Box w="100%">
      <Formik
        initialValues={initialValues}
        validationSchema={
          isSignIn || isSignUp ? loginValidation : emailValidation
        }
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit }) => (
          <Flex direction="column" gap="12px">
            <Heading
              as="h3"
              fontWeight="900"
              fontSize="24px"
              lineHeight="24px"
              textAlign="center"
              mb="36px"
            >
              {isSignIn
                ? 'Welcome back, log in'
                : isSignUp
                ? 'Create account'
                : 'Log in or create account'}
            </Heading>
            <FormInput w="100%" label="Email" name="email" />
            {(isSignIn || isSignUp) && (
              <>
                <FormInput
                  w="100%"
                  name="password"
                  label="Password"
                  type="password"
                />
                {errorMessage && <ErrorMessage error={errorMessage} />}
              </>
            )}
            <Button
              h="auto"
              size="lg"
              variant="primary"
              onClick={() => handleSubmit(values as any)}
              mt="4px"
            >
              {isLoadingState ? <LoadingDots color="white" /> : 'Continue'}
            </Button>
            <Flex align="center" justify="center">
              <Divider w="40%" borderColor="black.20" />
              <Text m="16px" fontSize="12px" color="gray.60">
                OR
              </Text>
              <Divider w="40%" borderColor="black.20" />
            </Flex>
            <Text>Logged in at {user?.attributes?.email}</Text>
            <Button
              variant="solid"
              onClick={() => signInWith(CognitoHostedUIIdentityProvider.Apple)}
              bgColor="black"
              h="auto"
              color="white"
              gap="12px"
              _hover={{ bgColor: '#353434' }}
              _active={{ bgColor: '#353434' }}
            >
              <SVG alt="" src={AppleIcon} />
              Continue with Apple
            </Button>
            <Button
              variant="outline"
              onClick={() => signInWith(CognitoHostedUIIdentityProvider.Google)}
              h="auto"
              gap="12px"
            >
              <SVG alt="" src={GoogleIcon} />
              Continue with Google
            </Button>

            <Button h="auto" size="lg" variant="primary" onClick={signOut}>
              Sign out
            </Button>
          </Flex>
        )}
      </Formik>
    </Box>
  )
}
