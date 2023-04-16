import { Flex, Stack, Text } from '@chakra-ui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '.'

export default {
  component: FormInput,
  title: 'components/Form-Input',
}

export const FormInputView = () => (
  <Formik
    initialValues={{ title: '', customSource: '' }}
    validationSchema={Yup.object().shape({
      label: Yup.string().required('No label provided.'),
      password: Yup.string().required('No password provided.'),
      units: Yup.string().required('No unit value provided.'),
    })}
    onSubmit={() => {
      undefined
    }}
  >
    <Stack direction="column">
      <Text>Normal</Text>
      <Flex gap="8">
        <FormInput w="300px" label="Label" name="label" />
      </Flex>
      <Text>Password</Text>
      <Flex gap="8">
        <FormInput w="300px" name="password" label="Password" type="password" />
      </Flex>
      <Text>With Units</Text>
      <Flex gap="8">
        <FormInput
          w="300px"
          label="units"
          name="units"
          unitOptions={[
            { value: 'lb', label: 'lb' },
            { value: 'kg', label: 'kg' },
          ]}
        />
      </Flex>
      <Text>XS</Text>
      <Flex gap="8"></Flex>
    </Stack>
  </Formik>
)
