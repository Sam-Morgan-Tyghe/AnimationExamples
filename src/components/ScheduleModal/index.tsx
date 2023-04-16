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
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAPI, usePostAPI } from '~/api/useHook'
import closeBtn from '~/assets/icons/closeBtn.svg'
import ScheduleInput from '~/containers/Content/ScheduleInput'

import SVG from '../SVG'

type modalProps = {
  isOpen: boolean
  toggleModal: (b: boolean) => void
}

export default function ScheduleModal({ isOpen, toggleModal }: modalProps) {
  const { contentId } = useParams()
  const [postDate, setPostDate] = useState('')

  const { data: allDates } = useGetAPI<string[]>({
    endpoint: '/schedule/dates/',
  })

  const { mutate: postScheduleDateCall, isSuccess } = usePostAPI({
    endpoint: `/schedule/workout/${contentId}/`,
    data: { scheduled_at: postDate && new Date(postDate).toISOString() },
    config: { successMessage: 'Successfully Scheduled a New Workout' },
  })

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => toggleModal(!isOpen)}
      isCentered
    >
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
      <ModalContent minW="500px" minH="500px">
        <ModalHeader borderBottom="1px solid rgba(0, 0, 0, 0.1)">
          <Flex align="center" justify="space-between">
            <Box cursor="pointer" onClick={() => toggleModal(!isOpen)}>
              <SVG src={closeBtn} alt="" />
            </Box>
            <Text fontWeight="900" fontSize="20px">
              Reschedule
            </Text>
            <Box w="40px" h="40px" />
          </Flex>
        </ModalHeader>
        <ModalBody h="700px">
          <ScheduleInput allDates={allDates} setPostDate={setPostDate} />
        </ModalBody>
        <ModalFooter
          mt="100px"
          p="24px"
          boxShadow="0px -1px 0px rgba(0, 0, 0, 0.05)"
        >
          <Flex w="100%" h="100%" justify="space-between" align="center">
            <Button
              w="100%"
              variant="primary"
              type="submit"
              onClick={() => {
                postScheduleDateCall()
                if (isSuccess) {
                  toggleModal(!isOpen)
                }
              }}
            >
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}
