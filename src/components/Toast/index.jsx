import { Flex, Text, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import CloseIcon from '../../assets/icons/close.svg'
import SVG from '../../components/SVG'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function Toast({ isOpen = false, message = '' }) {
  const [openToast, setOpenToast] = useState(isOpen)
  const [forceClose, setForceClose] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const { text, type } = message

  useEffect(() => {
    if (isOpen) {
      setOpenToast(true)
      setTimeout(() => setOpenToast(false), 5000)
    }
  }, [isOpen])

  const fadein = {
    transform: [
      'translateX(100%) translateY(0%) translateZ(0px)',
      'translateX(0%) translateY(0%) translateZ(0px)',
    ],
    opacity: [0, 1],
  }
  const fadeOut = {
    transform: [
      'translateX(0%) translateY(0%) translateZ(0px)',
      'translateX(100%) translateY(0%) translateZ(0px)',
    ],
    opacity: [1, 0],
  }

  return (
    <ChakraBox
      initial={false}
      position="fixed"
      top="50px"
      right="50px"
      animate={
        forceClose ? fadeOut : !isHovering && (openToast ? fadein : fadeOut)
      }
      max-width="100vw"
      zIndex="10000"
      maxH="500px"
    >
      <Flex
        w="255px"
        bg="primary.white.100"
        align="center"
        p="3px 18px 3px 18px"
        borderRadius="6px"
        border="1px"
        borderColor={
          type === 'Success' ? 'neutral.gray.900' : 'feedback.error.500'
        }
        justify="space-around"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Flex w="169px">
          <Flex direction="column" justify="flex-start">
            <Text fontWeight="500" color="primary.blue.900">
              {type}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="500"
              color="neutral.gray.700"
              maxH="350px"
              overflow="auto"
            >
              {text}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" justify="flex-end">
          <SVG
            alt=""
            src={CloseIcon}
            cursor="pointer"
            onClick={() => setForceClose(true)}
          />
        </Flex>
      </Flex>
    </ChakraBox>
  )
}
