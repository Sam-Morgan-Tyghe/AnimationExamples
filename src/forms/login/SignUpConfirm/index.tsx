import {
  Box,
  Flex,
  Heading,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import SVG from '~/components/SVG'

import BackArrow from '../../../assets/icons/arrow-back.svg'
import ErrorMessage from '../../../components/Inputs/ErrorMessage'
import { loginPageTypes } from '../../../utils/consts/loginPageTypes'

interface SignUpConfirmProps {
  setPageByKey: (key: string) => void
  loginUser: { username: string }
  password: string
}

export default function SignUpConfirm({
  setPageByKey,
  loginUser,
  password,
}: SignUpConfirmProps): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSignUpConfirm = async (code: string): Promise<void> => {
    try {
      await Auth.confirmSignUp(loginUser.username, code)
      await Auth.signIn(loginUser.username, password)
      setPageByKey(loginPageTypes.PersonalInfo)
    } catch (error: any) {
      setErrorMessage(error?.message)
    }
  }

  return (
    <Box w="100%">
      <Flex justifyContent="center" position="relative" mb="48px">
        <Box
          position="absolute"
          left="0"
          height="24px"
          display="flex"
          alignItems="center"
          onClick={() => setPageByKey(loginPageTypes.Login)}
        >
          <SVG alt="" src={BackArrow} />
        </Box>
        <Heading as="h3" fontWeight={900} fontSize="24px" lineHeight="24px">
          Activate your account
        </Heading>
      </Flex>
      <Text fontSize="16px" lineHeight="24px" color="gray.60" mb="36px">
        Enter the verification code sent to {loginUser.username}
      </Text>
      <Flex justifyContent="space-between" maxW="300px">
        <PinInput otp onComplete={handleSignUpConfirm} placeholder=".">
          {/* TODO: add autoFocus to first PinInputField like below */}
          {/* <PinInputField backgroundColor="white" autoFocus /> */}
          <PinInputField backgroundColor="white" />
          <PinInputField backgroundColor="white" />
          <PinInputField backgroundColor="white" />
          <PinInputField backgroundColor="white" />
          <PinInputField backgroundColor="white" />
          <PinInputField backgroundColor="white" />
        </PinInput>
      </Flex>
      <Text
        variant="display"
        fontWeight="700"
        my="20px"
        _hover={{ cursor: 'pointer' }}
        onClick={async () =>
          await Auth.resendSignUp(loginUser.username).catch(e =>
            console.error(e),
          )
        }
      >
        SEND A NEW CODE
      </Text>
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </Box>
  )
}
