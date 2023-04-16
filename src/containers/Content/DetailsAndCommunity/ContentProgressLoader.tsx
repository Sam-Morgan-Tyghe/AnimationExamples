import { Flex, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

export function ContentProgressLoader({}) {
  return (
    <Flex direction="column" gap="16px">
      <Skeleton w="100px">
        <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
          dummy text
        </Text>
      </Skeleton>

      <Flex>
        <SkeletonText>
          <Text>dummy text</Text>
        </SkeletonText>
      </Flex>
    </Flex>
  )
}
