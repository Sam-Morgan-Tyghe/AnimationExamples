import { Box, Flex, Skeleton, VStack } from '@chakra-ui/react'

export function ContentLoading() {
  return (
    <Flex>
      <VStack w="100%" h="100%">
        <Skeleton w="100%" h="460px">
          <Box />
        </Skeleton>

        <Flex justifyContent="space-between" w="100%" py="56px" gap="16px">
          <Flex direction="column">
            <Skeleton
              fontWeight="900"
              fontSize="24px"
              lineHeight="24px"
              textAlign="center"
              mb="36px"
            >
              dummy loading text
            </Skeleton>
            <Skeleton>dummy loading text</Skeleton>
          </Flex>

          <Skeleton>
            <Box w="200px" h="20px" />
          </Skeleton>
          <Skeleton>
            <Box h="20px" w="60px" />
          </Skeleton>
        </Flex>
      </VStack>
    </Flex>
  )
}
