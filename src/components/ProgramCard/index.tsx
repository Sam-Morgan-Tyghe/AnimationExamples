import { Box, Flex, Image, Text } from '@chakra-ui/react'

import caroline from '../../assets/images/caroline.jpg'

export default function ProgramCard() {
  return (
    <Flex
      overflow="hidden"
      borderRadius="8px"
      maxW="496px"
      maxH="496px"
      cursor="pointer"
      position="relative"
      direction="column"
    >
      <Image
        src={caroline}
        transition="400ms ease-in"
        objectFit="fill"
        _hover={{ transform: 'scale(1.1)' }}
      />
      <Flex
        direction="column"
        justify="flex-end"
        position="absolute"
        p="24px"
        bottom="24px"
        gap="12px"
      >
        <Text fontSize="24px" fontWeight="900" lineHeight="24px" color="white">
          EPIC III Program
        </Text>
        <Flex
          align="center"
          color="rgba(235, 245, 255, 0.75)"
          textTransform="uppercase"
          fontSize="12px"
          gap="12px"
          fontWeight="700"
        >
          <Text>50 Workouts</Text>
          <Box w="3px" h="3px" bg="rgba(235, 245, 255, 0.75)" />
          <Text>10 weeks</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
