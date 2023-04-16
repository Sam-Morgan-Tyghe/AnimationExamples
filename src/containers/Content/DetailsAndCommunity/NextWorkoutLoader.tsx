import { Flex, Skeleton, Text } from '@chakra-ui/react'

export function NextWorkoutLoader() {
  return (
    <Flex direction="column" gap="16px">
      <Skeleton>
        <Text>Dummy Text</Text>
        <Flex wrap="wrap">
          <Skeleton w="100%" h="460px">
            <Flex />
          </Skeleton>
        </Flex>
      </Skeleton>
    </Flex>
  )
}
