import { Flex, Skeleton, Text } from '@chakra-ui/react'

export function MuscleGroupLoader() {
  const skeletonDumyArr = [
    'long dummy text here',
    'dummy',
    'placeholder',
    'text',
    'muscle',
    'group',
    'one more long dummy text here',
  ]
  return (
    <Flex direction="column" gap="16px">
      <Skeleton w="200px">
        <Text>Dummy Text</Text>
      </Skeleton>
      <Flex wrap="wrap" gap="8px">
        {skeletonDumyArr.map(item => (
          <Skeleton key={item}>
            <Text
              p="8px 16px"
              borderRadius="8px"
              border="1px solid"
              borderColor="rgba(0, 0, 0, 0.1)"
              bg={'white'}
              color={'black'}
              fontWeight="800"
              w="fit-content"
              fontSize="14px"
            >
              {item}
            </Text>
          </Skeleton>
        ))}
      </Flex>
    </Flex>
  )
}
