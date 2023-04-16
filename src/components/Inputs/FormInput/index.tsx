import {
  Box,
  Input as ChakraInput,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import { useField } from 'formik'
import React, { useState } from 'react'
import SVG from '~/components/SVG'

import CaretDownIcon from '../../../assets/icons/caret-down.svg'
import EyeClosed from '../../../assets/icons/eye-closed.svg'
import EyeOpen from '../../../assets/icons/eye.svg'
import ErrorMessage from '../ErrorMessage'

interface FormInputProps {
  name: string
  subName?: string
  unitOptions?: {
    value: string | number | undefined
    label: string
  }[]
  label: string
  type?: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  w?: string
}

export default function FormInput(props: FormInputProps): JSX.Element {
  const [isVisible, toggleVisibility] = useState<boolean>(
    props.type === 'password' ? false : true,
  )

  const [field, meta] = useField(props.name)
  const [subField] = useField(props.subName ? props.subName : '')
  const hasErrors = meta.error && meta.touched

  const { unitOptions, ...inputProps } = props

  return (
    <Box w="100%">
      <InputGroup w="100%" bgColor="white">
        <FormControl variant="floating" id={props.name} w="100%">
          <ChakraInput
            {...field}
            {...inputProps}
            type={isVisible && props.type === 'password' ? 'text' : props.type}
            placeholder=" "
          />
          <FormLabel {...(unitOptions?.length && { className: 'hasUnits' })}>
            {props.label}
          </FormLabel>
          {props.type === 'password' && (
            <InputRightElement w="auto" mr={3}>
              <Box
                onClick={() => toggleVisibility(!isVisible)}
                _hover={{ cursor: 'pointer' }}
              >
                {isVisible ? (
                  <SVG alt="" src={EyeClosed} />
                ) : (
                  <SVG alt="" src={EyeOpen} />
                )}
              </Box>
            </InputRightElement>
          )}
          {!!unitOptions?.length && (
            <InputRightElement w="auto">
              <Select
                {...subField}
                icon={
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    w="9px"
                    h="5px"
                  >
                    <SVG alt="" src={CaretDownIcon} />
                  </Flex>
                }
                border="none"
                bg="transparent"
                _focusVisible={{ border: 'none' }}
                defaultValue={unitOptions[0].value}
              >
                {unitOptions.map((option, i) => (
                  <option
                    key={option.value}
                    value={option.value}
                    defaultChecked={i === 0 ? true : false}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
            </InputRightElement>
          )}
        </FormControl>
      </InputGroup>
      {hasErrors && <ErrorMessage error={meta?.error ?? ''} />}
    </Box>
  )
}
