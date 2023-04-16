import {
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react'

export function ProgramVideoProgressLoader() {
  const dummyArr = [1, 2, 3]

  return (
    <Flex direction="column" gap="16px" py="40px">
      <Skeleton w="100px">
        <Text>Dummy Text</Text>
      </Skeleton>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="32px"
      >
        <GridItem rowSpan={2} colSpan={3}>
          <Skeleton h="648px">
            <Flex />
          </Skeleton>
        </GridItem>
        {dummyArr.map(item => (
          <GridItem key={item} rowSpan={1} colSpan={1}>
            <Skeleton h="320px">
              <Flex />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Skeleton w="100px">
        <Text>Dummy Text</Text>
      </Skeleton>
      <SimpleGrid columns={3} spacing="32px">
        {dummyArr.map(item => (
          <Skeleton key={item} h="320px">
            <Flex />
          </Skeleton>
        ))}
      </SimpleGrid>
    </Flex>
  )
}
