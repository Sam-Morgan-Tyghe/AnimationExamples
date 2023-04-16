import { Button, Flex, Text } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import FormInput from '../Inputs/FormInput'

type LoginAndSecurityProps = {
  email: string | undefined
}

export default function LoginAndSecurity({ email }: LoginAndSecurityProps) {
  const [userEmail] = useState(email)
  const initialValues = {
    email: userEmail,
    password: '',
    newPassword: '',
  }

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Please enter old password'),
    newPassword: Yup.string().required('Please enter your new password'),
  })

  return (
    <Flex direction="column" justify="center" gap="40px">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => {
          try {
            await Auth.currentAuthenticatedUser().then(user => {
              return Auth.changePassword(
                user,
                values.password,
                values.newPassword,
              )
            })
          } catch (error) {
            console.error(error)
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex direction="column" justify="center" align="center" gap="40px">
              <Flex direction="column" justify="flex-start" gap="16px">
                <Text color="neutral.975" fontWeight="900" fontSize="20px">
                  Email
                </Text>
                <FormInput name="email" label="Email" w="496px" />
              </Flex>
              <Flex direction="column" justify="flex-start" gap="16px">
                <Text color="neutral.975" fontWeight="900" fontSize="20px">
                  Password
                </Text>
                <FormInput
                  name="password"
                  type="password"
                  label="Current password"
                  w="496px"
                />
                <FormInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  w="496px"
                />
              </Flex>
              <Button variant="primary" type="submit" w="496px">
                Save
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
    </Flex>
  )
}
