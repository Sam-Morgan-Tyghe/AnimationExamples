import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import BackArrow from '~/assets/icons/arrow-back.svg'
import SVG from '~/components/SVG'
import { loginPageTypes } from '~/utils/consts/loginPageTypes'

export default function Disclaimer({
  setPageByKey,
}: {
  setPageByKey: (key: string) => void
}): JSX.Element {
  return (
    <Flex direction="column" gap="40px">
      <Flex direction="column">
        <Flex justifyContent="center" position="relative" mb="48px">
          <Box
            position="absolute"
            left="0"
            height="24px"
            display="flex"
            alignItems="center"
            onClick={() => setPageByKey(loginPageTypes.Measurements)}
          >
            <SVG alt="" src={BackArrow} />
          </Box>
          <Heading as="h3" fontWeight={900} fontSize="24px" lineHeight="24px">
            Disclaimer
          </Heading>
        </Flex>
        <Text>
          If you are new to exercise or planning on embarking on a new fitness
          programme, you should consult your physician.Videos may offer health,
          fitness or nutritional information and is meant for educational
          purposes only. This information is not meant as an alternative to
          seeking professional medical advice or suggested treatment.Please know
          that performing any exercise or programme is solely at your own risk.
        </Text>
      </Flex>
      <Button variant="primary" w="100%" as={Link} to="/">
        Agree and continue
      </Button>
    </Flex>
  )
}
