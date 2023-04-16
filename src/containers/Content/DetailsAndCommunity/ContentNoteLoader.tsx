import { Button, Flex, Skeleton, Text } from '@chakra-ui/react'

export function ContentNoteLoader() {
  return (
    <Flex direction="column" gap="16px">
      <Skeleton>
        <Flex w="100%" h="20px" />
      </Skeleton>
      <Flex>
        <Skeleton>
          <Text>dummy text</Text>
        </Skeleton>
        <Skeleton>
          <Button variant="white" ml="auto">
            dummy button
          </Button>
        </Skeleton>
      </Flex>
    </Flex>
  )
}
