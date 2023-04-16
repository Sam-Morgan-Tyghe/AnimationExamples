import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import { createUser } from '~/api/api-calls'
import BackArrow from '~/assets/icons/arrow-back.svg'
import LoadingDots from '~/components/LoadingDots'
import SVG from '~/components/SVG'

import FormInput from '../../../components/Inputs/FormInput'
import FormSelect from '../../../components/Inputs/FormSelect'
import { loginPageTypes } from '../../../utils/consts/loginPageTypes'
import './datePicker.css'
import './datePicker.scss'
import { initialValues, personalInfoValidation } from './validation'

export interface PersonalInfoProps {
  setPageByKey: (key: string) => void
  loginUser: { username: string }
}

export function DatePickerInput({
  openCalendar,
  value,
  handleValueChange,
  type,
}: any) {
  return (
    <FormInput
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
      label="Date of birth"
      name="dateOfBirth"
      w={type === 'edit' ? '500px' : '100%'}
    />
  )
}

export default function PersonalInfo({
  setPageByKey,
  loginUser,
}: PersonalInfoProps): JSX.Element {
  const [isLoadingState] = useState(false)

  const handleSubmits = async (values: typeof initialValues) => {
    let email = loginUser.username

    try {
      const user = await Auth.currentAuthenticatedUser()
      const newEmail = user?.attributes?.email
      if (newEmail) {
        email = newEmail
      }
    } catch (error) {
      console.log(error)
    }

    const dob = values.dateOfBirth as any
    const payload = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: email,
      username: email,
      gender: values.gender.toLowerCase() === 'male' ? 0 : 1,
      date_of_birth: dob.format('YYYY-MM-DD'),
    }
    createUser(payload)
    setPageByKey(loginPageTypes.ProfilePic)
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
          Personal info
        </Heading>
      </Flex>
      <Formik
        initialValues={initialValues}
        validationSchema={personalInfoValidation}
        onSubmit={handleSubmits}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Flex direction="column" gap="12px">
            <FormInput w="100%" label="First name" name="firstName" />
            <FormInput w="100%" label="Last name" name="lastName" />
            <DatePicker
              value={values.dateOfBirth}
              onChange={e => {
                setFieldValue('dateOfBirth', e)
              }}
              render={
                <DatePickerInput
                  openCalendar={undefined}
                  value={undefined}
                  handleValueChange={undefined}
                />
              }
              format="MMMM DD, YYYY"
              weekDays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
              weekStartDayIndex={1}
            />

            <FormSelect
              label="Gender"
              name="gender"
              hasValue={values.gender !== ''}
              value={undefined}
              // onChange={(e: any) => {
              //   setFieldValue('gender', e)
              // }}
            >
              <option selected hidden disabled value=""></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </FormSelect>

            <Button
              h="auto"
              size="lg"
              variant="primary"
              onClick={() => handleSubmit(values as any)}
              type="submit"
              mt="4px"
            >
              {isLoadingState ? <LoadingDots color="white" /> : 'Continue'}
            </Button>
          </Flex>
        )}
      </Formik>
    </Box>
  )
}
