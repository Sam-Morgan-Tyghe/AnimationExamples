import { Box, Container, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function LoadingDots({ color = 'black' }) {
  const animationKeyframes = keyframes`
        0% { opacity: 0.2 }
        25% { opacity: 0.4 }
        50% { opacity: 0.6 }
        75% { opacity: 0.8 }
        100% { opacity: 1}
        `

  const animationKeyframes2 = keyframes`
        0% { opacity: 1 }
        25% { opacity: 0.8 }
        50% { opacity: 0.6 }
        75% { opacity: 0.4 }
        100% { opacity: 0.2}
        `

  const animation = `${animationKeyframes} 800ms ease-in-out infinite`
  const animation2 = `${animationKeyframes2} 800ms ease-in-out infinite`
  return (
    <Container
      h="100%"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="8px"
    >
      <Box
        bg={color}
        w="12px"
        h="12px"
        borderRadius="8px"
        as={motion.div}
        animation={animation}
      />
      <Box
        bg={color}
        w="12px"
        h="12px"
        borderRadius="8px"
        as={motion.div}
        animation={animation2}
      />
      <Box
        bg={color}
        w="12px"
        h="12px"
        borderRadius="8px"
        as={motion.div}
        animation={animation}
      />
    </Container>
  )
}
