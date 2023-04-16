import { Box, Flex, Image } from '@chakra-ui/react'
import SVG from '~/components/SVG'

import CGLogo from '../assets/icons/CG-logo.svg'
import Caroline from '../assets/images/caroline.jpg'

interface WelcomeLayoutProps {
  children: JSX.Element | null
}

export default function WelcomeLayout({ children }: WelcomeLayoutProps) {
  return (
    <>
      <Flex
        bg={'black.5'}
        h="100vh"
        overflow="hidden"
        flexWrap={{ base: 'wrap', sm: 'nowrap' }}
      >
        <Box width={{ base: '100%', sm: '35%' }}>
          <Box position="absolute" left="36px" top="36px">
            <SVG alt="" src={CGLogo} />
          </Box>
          <Image
            src={Caroline}
            alt="Candid shot of fitness guru Caroline Girvan"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          px="100px"
          py="80px"
          width={{ base: '100%', sm: '65%' }}
          h="100%"
          overflowY="scroll"
          position="relative"
        >
          {children}
        </Box>
      </Flex>
    </>
  )
}
