import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  Select,
} from '@chakra-ui/react'
import { FieldInputProps, useField } from 'formik'
import React from 'react'

import ErrorMessage from '../ErrorMessage'

type FormSelectProps = {
  name: string
  label: string
  children: React.ReactNode
  hasValue: boolean
  value: string | number | readonly string[] | undefined // add this line
}

export default function FormSelect({
  name,
  label,
  children,
  hasValue,
}: FormSelectProps) {
  const [field, meta] = useField(name)
  const hasErrors = meta.error && meta.touched

  return (
    <Box w="100%">
      <InputGroup w="100%" bgColor="white">
        <FormControl variant="floating" id={name} w="100%">
          <Select
            w="100%"
            {...(field as FieldInputProps<string>)}
            {...(hasValue && { className: 'hasValue' })}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              field.onChange(e)
            }}
          >
            {children}
          </Select>
          <FormLabel {...(hasValue && { className: 'hasValue' })}>
            {label}
          </FormLabel>
        </FormControl>
      </InputGroup>
      {hasErrors && <ErrorMessage error={meta?.error ?? ''} />}
    </Box>
  )
}
