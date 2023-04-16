import { Text } from '@chakra-ui/react'

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <Text color="error.50" letterSpacing="0.01em" fontSize="12px" mt="4px">
      {error}
    </Text>
  )
}
