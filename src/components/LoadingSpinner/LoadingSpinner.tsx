import { Flex, Spinner, Text } from '@chakra-ui/react'

type Props = {
  resource: string
}

export default function LoadingSpinner({ resource }: Props) {
  return (
    <Flex justify="center" align="center" w="100%" h="100%" direction="column">
      <Spinner />
      <Text mt="5px">Loading {resource}...</Text>
    </Flex>
  )
}
