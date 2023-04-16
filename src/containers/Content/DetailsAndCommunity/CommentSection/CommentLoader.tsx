import {
  Avatar,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'

export function CommentLoader() {
  const dummyCommentSection = [1, 2]

  return (
    <Flex direction="column" gap="40px">
      <Skeleton w="200px">
        <Text>Dummy Text</Text>
      </Skeleton>
      <Skeleton>
        <Text>Dummy Text</Text>
      </Skeleton>
      <Skeleton>
        <Text>Dummy Text</Text>
      </Skeleton>
      <Flex direction="column" gap="16px">
        {dummyCommentSection.map(item => (
          <Flex key={item} gap="18px">
            <SkeletonCircle>
              <Avatar />
            </SkeletonCircle>
            <Flex direction="column" gap="8px">
              <SkeletonText>
                <Text>Dummy text</Text>
              </SkeletonText>
              <Flex gap="8px" wrap="wrap">
                {item === 1 ? (
                  <Skeleton w="200px" h="200px">
                    <Flex>
                      <Text>Dummy Text</Text>
                    </Flex>
                  </Skeleton>
                ) : (
                  <>
                    <Skeleton w="200px" h="200px">
                      <Flex>
                        <Text>Dummy Text</Text>
                      </Flex>
                    </Skeleton>
                    <Skeleton w="200px" h="200px">
                      <Flex>
                        <Text>Dummy Text</Text>
                      </Flex>
                    </Skeleton>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
