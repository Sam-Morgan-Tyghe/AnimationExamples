import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import WelcomeLayout from '../layouts/WelcomeLayout'

export default function Welcome(): JSX.Element {
  return (
    <WelcomeLayout>
      <>
        <Center m="auto" h="100%" w="60%">
          <Flex direction="column">
            <Heading as="h1" fontWeight="900">
              Build a strong and balanced body with Caroline Girvan
            </Heading>
            <Text
              color="black.80"
              fontSize="18px"
              lineHeight="24px"
              mt="24px"
              mb="64px"
            >
              Join me in my home as I train hard through the NEW 10 Week EPIC
              III Program.
            </Text>
            <Flex gap="8px">
              <Button size="lg" h="auto" variant="primary" p={0}>
                <Link to="/login" style={{ padding: '20px 24px' }}>
                  Join now
                </Link>
              </Button>
              <Button size="lg" h="auto" variant="white" p={0}>
                <Link to="/login" style={{ padding: '20px 24px' }}>
                  Log in
                </Link>
              </Button>
            </Flex>
          </Flex>
        </Center>
        <Flex
          position="absolute"
          bottom="32px"
          left="32px"
          right="32px"
          gap="24px"
          color="black.40"
          fontSize="14px"
          lineHeight="20px"
        >
          <Text>&copy; Caroline Girvan</Text>
          <Text ml="auto">Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
        </Flex>
      </>
    </WelcomeLayout>
  )
}
