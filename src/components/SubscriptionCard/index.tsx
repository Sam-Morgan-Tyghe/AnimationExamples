import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/react'
import SVG from '~/components/SVG'

import CheckCircle from '../../assets/icons/check-circle.svg'

interface SubscriptionCardProps {
  title: string
  amount: number
  interval: string
  annualPrice: number
  saving?: number
  image: string
  isSelected?: boolean
  onClick?: () => void
}

function SubscriptionCard({
  title,
  amount,
  interval,
  annualPrice,
  saving = 0,
  image,
  isSelected = false,
  onClick,
}: SubscriptionCardProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      boxShadow={theme.shadows.md}
      borderRadius={8}
      p="24px"
      w="sm"
      maxW="300"
      {...(isSelected && { border: '3px solid black' })}
      _hover={{ backgroundColor: 'black.5' }}
      _active={{ backgroundColor: 'black.10' }}
      _focus={{ outline: '2px solid #95CCFF' }}
      cursor="pointer"
      onClick={() => onClick && onClick()}
    >
      <Flex>
        <Heading as="h4" fontSize="lg" lineHeight="lg" fontWeight="900">
          {title}
        </Heading>
        {saving > 0 && (
          <Badge
            backgroundColor="success.75"
            borderRadius="8px"
            color="white"
            fontSize="xs"
            ml="4"
            alignSelf="center"
            p="2px 6px"
          >
            SAVE {saving}%
          </Badge>
        )}
        {isSelected && (
          <Box alignSelf="center" ml="auto">
            <SVG alt="" src={CheckCircle} />
          </Box>
        )}
      </Flex>
      <Flex>
        <Stack w="50%" justifyContent="center">
          <Flex
            fontWeight="900"
            fontFamily={theme.fonts.heading}
            lineHeight="3xl"
            mt="3"
          >
            <Text fontSize="3xl" lineHeight="md">
              £{amount}
              <Text as="span" fontSize="sm" color="black.40">
                {' '}
                / {interval}
              </Text>
            </Text>
          </Flex>
          <Text fontSize="sm">Annual price £{annualPrice}</Text>
        </Stack>
        <Image w="100px" src={image} alt="dumbells" ml="auto" mt="auto" />
      </Flex>
    </Box>
  )
}

export default SubscriptionCard
