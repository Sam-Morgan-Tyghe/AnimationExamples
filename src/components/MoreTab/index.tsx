import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useRemoveAPI } from '~/api/useHook'
import ChevronRight from '~/assets/icons/chevron-right.svg'

import SVG from '../SVG'

export default function MoreTab() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      w="100%"
      justify="center"
      align="center"
      gap="40px"
    >
      <Flex w="495px">
        <Text color="neutral.975" fontWeight="900" fontSize="20px">
          Resources
        </Text>
      </Flex>
      <Flex
        cursor="pointer"
        onClick={() => navigate('/terms')}
        w="495px"
        justify="space-between"
        align="center"
      >
        <Text>Terms and Conditions</Text>
        <SVG src={ChevronRight} alt="" />
      </Flex>
      <Flex
        cursor="pointer"
        onClick={() => navigate('/privacyPolicy')}
        w="495px"
        justify="space-between"
        align="center"
      >
        <Text>Privacy Policy</Text>
        <SVG src={ChevronRight} alt="" />
      </Flex>
      <Flex w="495px">
        <Text color="neutral.975" fontWeight="900" fontSize="20px">
          Account
        </Text>
      </Flex>
      <Flex
        cursor="pointer"
        w="495px"
        justify="space-between"
        align="center"
        onClick={onOpen}
      >
        <Text color="error.75">Delete account</Text>
        <SVG src={ChevronRight} alt="" />
      </Flex>
      <DeleteUserModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

type DeleteUserModalProps = {
  isOpen: boolean
  onClose: (isOpen: boolean) => void
}

const DeleteUserModal = ({ isOpen, onClose }: DeleteUserModalProps) => {
  const { mutate: deleteUser } = useRemoveAPI({ endpoint: '/user/' })
  return (
    <Modal isOpen={isOpen} onClose={() => onClose(!isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Account</ModalHeader>
        <ModalBody>
          <Text>Are you sure you want to delete your account?</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={() => onClose(!isOpen)}>
            Cancel
          </Button>
          <Button
            bg="error.75"
            _hover={{ bg: 'error.50' }}
            color="white"
            onClick={() => {
              deleteUser()
              onClose(!isOpen)
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
