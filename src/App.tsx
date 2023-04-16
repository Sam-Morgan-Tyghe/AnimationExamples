import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Amplify } from 'aws-amplify'

import AppRouter from './AppRouter'
import { AppProvider } from './context'
import { theme } from './theme'
import './theme/fonts.css'

// import awsExports from './aws-exports'

// Configure Amplify
Amplify.configure({
  // ...awsExports,
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'eu-west-1:a47bffd6-2de7-49cc-9b70-269e759f3b53',

    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_uoEs2liCM',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'lupu80mmhv8nmiujd1j988r4m',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // for external providor signins https://docs.aws.amazon.com/cognito/latest/developerguide/google.html

    oauth: {
      domain: 'https://auth.dev.carolinegirvan.net',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'token', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
})
export default function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    // <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
    //   {({ signOut, user }) => (
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <AppProvider>
            <AppRouter />
          </AppProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </Authenticator.Provider>
    //   )}
    // </Authenticator>
  )
}
