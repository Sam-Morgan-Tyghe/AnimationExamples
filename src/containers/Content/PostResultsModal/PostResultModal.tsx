import { CloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  RetrieveASingleCHALLENGEVideo,
  SuccessfullySaveChallengeResult,
} from '~/api/types'
import { useGetAPI, usePostAPI } from '~/api/useHook'

export const PostResultModal = () => {
  const [result, setResult] = useState<number>()
  const { contentId, contentType } = useParams()

  const { data: contentDetails } = useGetAPI<RetrieveASingleCHALLENGEVideo>({
    endpoint: `/content/${contentType}/${contentId}`,
  })

  const { mutateAsync: postResult, isLoading: isPosting } =
    usePostAPI<SuccessfullySaveChallengeResult>({
      endpoint: `/content/challenge-result/${contentId}/`,
      data: { result: result },
    })

  const isAction = isPosting

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        color="primary.neutral.975"
        fontWeight={900}
        fontSize="20px"
        onClick={onOpen}
      >
        Post Results
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="16px" w="608px" h="608px" bg="#F5F6F7">
          <ModalBody>
            <Flex
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <CloseIcon onClick={onClose} cursor="pointer" />
              <ModalHeader whiteSpace="nowrap"></ModalHeader>
            </Flex>
            <Center flexDirection="column" gap="24px">
              <Text>Great job!</Text>
              <Text>How many push ups have you done?</Text>

              <Input onChange={e => setResult(Number(e.target.value))} />
              <Text>Personal best: {contentDetails?.progress.best_result}</Text>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => postResult().then(onClose)}
              w="100%"
              isDisabled={isAction}
            >
              Save Results
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
