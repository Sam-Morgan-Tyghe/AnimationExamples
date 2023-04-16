import { Avatar, Button, Flex, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios'
import { differenceInYears } from 'date-fns'
import { Formik } from 'formik'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import DatePicker from 'react-multi-date-picker'
import * as Yup from 'yup'
import { getToken } from '~/api/index'
import { GETUserBodyInfo, GetMyUSERDetailsUser } from '~/api/types'
import { useGetAPI, usePatchAPI, usePostAPI, usePutAPI } from '~/api/useHook'
import arrowBack from '~/assets/icons/arrow-back.svg'
import FormInput from '~/components/Inputs/FormInput'
import FormSelect from '~/components/Inputs/FormSelect'
import SVG from '~/components/SVG'
import { DatePickerInput } from '~/forms/login/PersonalInfo'
import { SERVER } from '~/settings'
import { formatFormDate } from '~/utils/helper'

type FormTypes = {
  firstName?: string
  lastName?: string
  gender?: string
  username?: string
  dateOfBirth?: string
  profilePhoto?: string
  height?: number
  unitsHeight?: string
  weight?: number
  unitsWeight?: string
}

type editProfileProps = {
  isEditing: boolean
  setIsEditing: (bool: boolean) => void
}

export default function EditProfile({
  isEditing,
  setIsEditing,
}: editProfileProps): JSX.Element {
  const [formikValues, setFormikValues] = useState<FormTypes>()
  const [profilePic, setProfilePic] = useState<any>()
  const [avatarPic, setProfileAvatar] = useState<any>()

  const [preSignedResponse, setPreSignedResponse] = useState<any>({})

  const uploadImageToS3 = async () => {
    try {
      const formData = new FormData()
      formData.append('key', preSignedResponse.data.key)
      formData.append('AWSAccessKeyId', preSignedResponse.data.AWSAccessKeyId)
      formData.append('policy', preSignedResponse.data.policy)
      formData.append('signature', preSignedResponse.data.signature)
      formData.append('Content-Type', profilePic?.type)
      formData.append('file', profilePic)

      const result = await axios.post(preSignedResponse.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return result.config.url
    } catch (error) {
      console.log('Error uploading image to S3:', error)
    }
  }

  const { data: personalInfo, isLoading: isLoadingPersonalInfo } =
    useGetAPI<GetMyUSERDetailsUser>({
      endpoint: `/user/`,
    })

  const { data: bodyInfo, isLoading: isLoadingBodyInfo } =
    useGetAPI<GETUserBodyInfo>({
      endpoint: '/user/body-info',
    })

  const { mutateAsync: patchPersonalInfo } = usePatchAPI({
    endpoint: `/user/${personalInfo?.id}/`,
    data: {
      first_name: formikValues?.firstName,
      last_name: formikValues?.lastName,
      profile_photo: encodeURI(profilePic?.path),
      username: formikValues?.username,
    },
  })

  const { mutateAsync: postBodyInfo } = usePostAPI({
    endpoint: '/user/body-info/',
    data: {
      height: formikValues?.height,
      height_unit: formikValues?.unitsHeight,
      weight: formikValues?.weight,
      weight_unit: formikValues?.unitsWeight,
    },
  })

  const { mutateAsync: postProfilePic } = usePostAPI({
    endpoint: '/user/photo-upload/',
    data: {
      name: encodeURI(profilePic?.name),
    },
  })

  const { mutateAsync: putBodyInfo } = usePutAPI({
    endpoint: '/user/body-info/',
    data: {
      height: formikValues?.height,
      height_unit: formikValues?.unitsHeight,
      weight: formikValues?.weight,
      weight_unit: formikValues?.unitsWeight,
    },
  })

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = async function () {
        setProfileAvatar(reader.result)
        const token = (await getToken()) ?? ''
        try {
          const preSignedUrlResponse = await axios.post(
            `${SERVER}/user/photo-upload/`,
            {
              name: encodeURI(file.name),
              content_type: file.type,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )

          setPreSignedResponse(preSignedUrlResponse.data)
          setProfilePic(file)
        } catch (error) {
          console.log('Error uploading image:', error)
        }
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  const initialValues: FormTypes = {
    firstName: personalInfo?.first_name,
    lastName: personalInfo?.last_name,
    gender: personalInfo?.gender === 0 ? 'female' : 'male',
    username: personalInfo?.username,
    dateOfBirth: formatFormDate(personalInfo?.date_of_birth ?? ''),
    height: bodyInfo?.body_info?.height?.value,
    unitsHeight: bodyInfo?.body_info?.height?.unit,
    weight: bodyInfo?.body_info?.weight?.value,
    unitsWeight: bodyInfo?.body_info?.weight?.unit,
  }

  const personalInfoValidation = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    gender: Yup.string()
      .oneOf(['male', 'female'])
      .required('Please enter your gender'),
    dateOfBirth: Yup.string()
      .test(
        'Date of Birth',
        'You must be at least 13 years old to join',
        (value = ''): any =>
          differenceInYears(new Date(), new Date(value)) >= 13,
      )
      .required('Please enter your date of birth'),
  })

  const UpdateProfile = async (vals: FormTypes) => {
    await setFormikValues(vals)
    if (profilePic) {
      await postProfilePic()
        .then(() => uploadImageToS3())
        .catch(e => console.error(e))
    }
    await patchPersonalInfo()
      .then(async () => {
        if (bodyInfo) {
          await putBodyInfo()
            .then(() => setIsEditing(!isEditing))
            .catch((e: any) => console.error(e))
        } else {
          await postBodyInfo()
            .then(() => setIsEditing(!isEditing))
            .catch(e => console.error(e))
        }
      })
      .catch(e => console.error(e))
  }

  return (
    <Flex direction="column" align="center" gap="32px" position="relative">
      <Flex
        position="absolute"
        cursor="pointer"
        top="5%"
        left="10%"
        onClick={() => setIsEditing(!isEditing)}
      >
        <SVG src={arrowBack} alt="" />
      </Flex>

      <Avatar
        w="120px"
        h="120px"
        src={avatarPic ?? personalInfo?.profile_photo}
        name={`${personalInfo?.first_name} ${personalInfo?.last_name}`}
      />

      <Flex direction="column" align="center" gap="12px">
        <Text fontWeight="900" fontSize="32px">
          {`${personalInfo?.first_name} ${personalInfo?.last_name}`}
        </Text>
        <Text
          fontWeight="400"
          fontSize="14px"
          color="black"
          opacity="0.4"
          letterSpacing="0.005em"
        >{`@${personalInfo?.username}`}</Text>
      </Flex>
      {isLoadingBodyInfo && isLoadingPersonalInfo ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={personalInfoValidation}
          onSubmit={(values: FormTypes) => {
            UpdateProfile(values)
          }}
          enableReinitialize
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Flex w="100%" direction="column" gap="16px" align="center">
                <Flex align="cnter" gap="16px">
                  <Flex
                    justify="center"
                    align="center"
                    cursor="pointer"
                    fontWeight="700"
                    h="40px"
                    borderRadius="8px"
                    p="10px 16px"
                    boxShadow="0px 8px 24px rgba(0, 0, 0, 0.04)"
                    {...getRootProps({ className: 'dropzone' })}
                  >
                    <input {...getInputProps()} />
                    <Text>Change Photo</Text>
                  </Flex>
                  <Button
                    variant="white"
                    isDisabled={
                      personalInfo?.profile_photo === null &&
                      profilePic?.src === undefined
                    }
                    onClick={() => setProfilePic(undefined)}
                  >
                    Remove photo
                  </Button>
                </Flex>
                <Flex justify="center" gap="16px">
                  <FormInput w="242px" label="First name" name="firstName" />
                  <FormInput w="242px" label="Last name" name="lastName" />
                </Flex>
                <Flex justify="center">
                  <FormInput w="500px" label="Username" name="username" />
                </Flex>
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
                      type="edit"
                    />
                  }
                  format="MMMM DD, YYYY"
                  weekDays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                  weekStartDayIndex={1}
                />
                <Flex w="500px">
                  <FormSelect
                    label="Gender"
                    name="gender"
                    hasValue={values.gender !== ''}
                    value={values.gender}
                  >
                    <option selected hidden disabled value=""></option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </FormSelect>
                </Flex>
                <Flex w="500px" justify="flex-start">
                  <Text mt="24px" fontWeight="900" fontSize="20px">
                    Body info
                  </Text>
                </Flex>
                <Flex justify="center" gap="16px">
                  <FormInput
                    subName="unitsWeight"
                    unitOptions={[
                      { value: 'lbs', label: 'lb' },
                      { value: 'kg', label: 'kg' },
                    ]}
                    w="242px"
                    label="Weight"
                    name="weight"
                  />
                  <FormInput
                    w="242px"
                    label="Height"
                    name="height"
                    subName="unitsHeight"
                    unitOptions={[
                      { value: 'inches', label: 'in' },
                      { value: 'cm', label: 'cm' },
                    ]}
                  />
                </Flex>
                <Button w="500px" type="submit" variant="primary">
                  Save
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      )}
    </Flex>
  )
}
