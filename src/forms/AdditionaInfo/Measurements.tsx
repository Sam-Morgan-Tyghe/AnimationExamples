import { Box, Button, Flex, Heading, Skeleton } from '@chakra-ui/react'
import { Formik } from 'formik'
import { useState } from 'react'
import { usePostAPI } from '~/api/useHook'
import BackArrow from '~/assets/icons/arrow-back.svg'
import FormInput from '~/components/Inputs/FormInput'
import LoadingDots from '~/components/LoadingDots'
import SVG from '~/components/SVG'
import { loginPageTypes } from '~/utils/consts/loginPageTypes'

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
export default function Measurements({
  setPageByKey,
}: {
  setPageByKey: (key: string) => void
}): JSX.Element {
  const [formikValues, setFormikValues] = useState<FormTypes>()

  const { mutateAsync: postBodyInfo, isLoading } = usePostAPI({
    endpoint: '/user/body-info/',
    data: {
      height: formikValues?.height,
      height_unit: formikValues?.unitsHeight,
      weight: formikValues?.weight,
      weight_unit: formikValues?.unitsWeight,
    },
  })

  const initialValues: FormTypes = {
    unitsHeight: 'cm',
    unitsWeight: 'kg',
  }

  const UpdateProfile = async (vals: FormTypes) => {
    await setFormikValues(vals)
    postBodyInfo()
      .then(() => setPageByKey(loginPageTypes.Disclaimer))
      .catch(e => console.error(e))
  }

  return (
    <Box w="100%">
      <Flex direction="column" align="center" gap="32px" position="relative">
        <Flex justifyContent="center" position="relative" mb="48px" w="100%">
          <Box
            position="absolute"
            left="0"
            height="24px"
            w="24px"
            display="flex"
            alignItems="center"
            onClick={() => setPageByKey(loginPageTypes.ProfilePic)}
          >
            <SVG alt="" src={BackArrow} />
          </Box>
          <Heading
            as="h3"
            fontWeight={900}
            fontSize="24px"
            lineHeight="24px"
            p="24px"
          >
            Measurements
          </Heading>
        </Flex>

        <Formik
          initialValues={initialValues}
          onSubmit={(values: FormTypes) => {
            UpdateProfile(values)
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Flex w="100%" direction="column" gap="16px" align="center">
                <Flex justify="center" gap="16px">
                  <Skeleton isLoaded={!isLoading}>
                    <FormInput
                      subName="unitsWeight"
                      unitOptions={[
                        { value: 'lbs', label: 'lb' },
                        { value: 'kg', label: 'kg' },
                      ]}
                      w="242px"
                      label="Weight"
                      name="weight"
                      type="number"
                    />
                  </Skeleton>
                  <Skeleton isLoaded={!isLoading}>
                    <FormInput
                      w="242px"
                      label="Height"
                      name="height"
                      type="number"
                      subName="unitsHeight"
                      unitOptions={[
                        { value: 'inches', label: 'in' },
                        { value: 'cm', label: 'cm' },
                      ]}
                    />
                  </Skeleton>
                </Flex>
                <Button
                  w="500px"
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingDots color="white" /> : 'Save'}
                </Button>
              </Flex>
            </form>
          )}
        </Formik>

        {!isLoading && (
          <Button onClick={() => setPageByKey(loginPageTypes.Disclaimer)}>
            Skip For now
          </Button>
        )}
      </Flex>
    </Box>
  )
}
