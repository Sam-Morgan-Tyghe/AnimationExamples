import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { getToken } from '~/api/index'
import { GetMyUSERDetailsUser } from '~/api/types'
import { useGetAPI, usePassablePatchAPI, usePostAPI } from '~/api/useHook'
import BackArrow from '~/assets/icons/arrow-back.svg'
import LoadingDots from '~/components/LoadingDots'
import SVG from '~/components/SVG'
import { SERVER } from '~/settings'
import { loginPageTypes } from '~/utils/consts/loginPageTypes'

export default function ProfilePicture({
  setPageByKey,
}: {
  setPageByKey: (key: string) => void
}): JSX.Element {
  const [profilePic, setProfilePic] = useState<any>()
  const [avatarPic, setProfileAvatar] = useState<any>()

  const [preSignedResponse, setPreSignedResponse] = useState<any>({})

  const { data: personalInfo } = useGetAPI<GetMyUSERDetailsUser>({
    endpoint: `/user/`,
  })

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

  const { mutateAsync: patchPersonalInfo, isLoading: isPatchLoading } =
    usePassablePatchAPI({
      endpoint: `/user/${personalInfo?.id}/`,
    })

  const { mutateAsync: postProfilePic, isLoading: isProfileLoading } =
    usePostAPI({
      endpoint: '/user/photo-upload/',
      data: {
        name: encodeURI(profilePic?.name),
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

  const UpdateProfile = async () => {
    if (profilePic) {
      await postProfilePic()
        .then(() => uploadImageToS3())
        .catch(e => console.log(e))

      patchPersonalInfo({ profile_photo: encodeURI(profilePic?.path) })
        .then(() => setPageByKey(loginPageTypes.Measurements))
        .catch(e => console.log(e))
    }
  }
  const isLoading = isProfileLoading || isPatchLoading
  return (
    <Flex direction="column" align="center" gap="32px" position="relative">
      <Flex justifyContent="center" position="relative" mb="48px" w="100%">
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
          Profile Picture
        </Heading>
      </Flex>
      <Flex
        w="408px"
        h="408px"
        justify="center"
        align="center"
        bg={`linear-gradient(to right, #9D9E9D 3px, transparent 3px) 0 0, linear-gradient(to right, #9D9E9D 3px, transparent 3px) 0 100%, linear-gradient(to left, #9D9E9D 3px, transparent 3px) 100% 0,
          linear-gradient(to left, #9D9E9D 3px, transparent 3px) 100% 100%,
          linear-gradient(to bottom, #9D9E9D 3px, transparent 3px) 0 0,
          linear-gradient(to bottom, #9D9E9D 3px, transparent 3px) 100% 0,
          linear-gradient(to top, #9D9E9D 3px, transparent 3px) 0 100%,
          linear-gradient(to top, #9D9E9D 3px, transparent 3px) 100% 100%;`}
        backgroundRepeat="no-repeat"
        backgroundSize="40px 40px"
        borderRadius="8px"
      >
        <Avatar
          w="270px"
          h="270px"
          src={avatarPic ?? personalInfo?.profile_photo}
          name={`${personalInfo?.first_name} ${personalInfo?.last_name}`}
        />
      </Flex>

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
          disabled={isLoading}
        >
          {isLoading ? <LoadingDots color="white" /> : 'Remove Photo'}
        </Button>
      </Flex>

      <Button
        variant="primary"
        w="100%"
        onClick={() => UpdateProfile()}
        disabled={isLoading}
      >
        {isLoading ? <LoadingDots color="white" /> : 'Continue'}
      </Button>
      <Button
        variant="ghost"
        w="100%"
        onClick={() => setPageByKey(loginPageTypes.Measurements)}
      >
        Skip For now
      </Button>
    </Flex>
  )
}
