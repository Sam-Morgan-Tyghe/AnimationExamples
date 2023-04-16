import {
  Box,
  Button,
  Modal as ChakraModal,
  Flex,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

import closeBtn from '../../assets/icons/closeBtn.svg'
import SVG from '../SVG'

type FilterTagsModalProps = {
  isOpen: boolean
  toggleModal: (isOpen: boolean) => void
  setShowTagResults: (isOpen: boolean) => void
  children: React.ReactNode
  setSelectedTags: (value: any) => void
}

export default function FilterTagsModal({
  isOpen,
  toggleModal,
  setShowTagResults,
  children,
  setSelectedTags,
}: FilterTagsModalProps) {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => toggleModal(!isOpen)}
      isCentered
    >
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
      <ModalContent maxW="672px">
        <ModalHeader borderBottom="1px solid rgba(0, 0, 0, 0.1)">
          <Flex align="center" justify="space-between">
            {/* <ModalCloseButton /> */}
            <Box cursor="pointer" onClick={() => toggleModal(!isOpen)}>
              <SVG src={closeBtn} alt="" />
            </Box>
            <Text fontWeight="900" fontSize="20px">
              Filter
            </Text>
            <Box w="40px" h="40px" />
          </Flex>
        </ModalHeader>
        <ModalBody maxH="528px" overflow="auto">
          {children}
        </ModalBody>
        <ModalFooter
          borderTop="1px solid rgba(0, 0, 0, 0.1)"
          p="24px"
          boxShadow="0px -1px 0px rgba(0, 0, 0, 0.05)"
        >
          <Flex w="100%" h="100%" justify="space-between" align="center">
            <Button
              variant="unstyled"
              fontWeight="800"
              fontSize="17px"
              onClick={() => setSelectedTags([])}
            >
              Clear all
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                toggleModal(false)
                setShowTagResults(true)
              }}
            >
              See results
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}
