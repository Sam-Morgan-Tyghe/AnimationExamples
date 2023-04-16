import { Button, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Payment1 from '~/assets/icons/Payment1.svg'
import Payment2 from '~/assets/icons/Payment2.svg'
import Payment3 from '~/assets/icons/Payment3.svg'
import DumbellImage from '~/assets/images/dumbells1.png'
import DumbellImage2 from '~/assets/images/dumbells2.png'
import SVG from '~/components/SVG'
import SubscriptionCard from '~/components/SubscriptionCard'

export default function Payment() {
  const [redirectLink, setRedirectLink] = useState('')
  const monthlySub = {
    title: 'Monthly',
    amount: 10,
    interval: 'month',
    annualPrice: 120,
    saving: 0,
    image: DumbellImage,
  }

  const annualSub = {
    title: 'Annually',
    amount: 96,
    interval: 'year',
    annualPrice: 96,
    saving: 20,
    image: DumbellImage2,
  }

  return (
    <Center>
      <VStack gap="16px">
        <VStack gap="90px">
          <Flex direction="column" gap="40px">
            <Heading>Join premium club todays</Heading>
            <Flex direction="column" gap="16px">
              <Flex gap="16px" alignItems="center">
                <SVG src={Payment1} alt="Payment Icon" />
                <Text>
                  Get access to all programs, workouts and premium content.
                </Text>
              </Flex>
              <Flex gap="16px" alignItems="center">
                <SVG src={Payment2} alt="Payment Icon" />

                <Text>
                  Download workouts to your phone so you can play videos
                  offline.
                </Text>
              </Flex>
              <Flex gap="16px" alignItems="center">
                <SVG src={Payment3} alt="Payment Icon" />

                <Text>
                  Connect Spotify or Apple Music to play your own music.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="24px">
            <SubscriptionCard
              {...monthlySub}
              onClick={() =>
                setRedirectLink(
                  'https://buy.stripe.com/test_8wMfZqcLXgVP7IsaEG',
                )
              }
              isSelected={
                redirectLink ===
                'https://buy.stripe.com/test_8wMfZqcLXgVP7IsaEG'
              }
            />
            <SubscriptionCard
              {...annualSub}
              onClick={() =>
                setRedirectLink(
                  'https://buy.stripe.com/test_cN2eVmh2d0WR2o8cMQ',
                )
              }
              isSelected={
                redirectLink ===
                'https://buy.stripe.com/test_cN2eVmh2d0WR2o8cMQ'
              }
            />
          </Flex>
        </VStack>
        <Button
          variant="primary"
          w="100%"
          as={Link}
          to={redirectLink}
          disabled={!Boolean(redirectLink)}
        >
          Subscribe
        </Button>
      </VStack>
    </Center>
  )
}
