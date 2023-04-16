import { CloseIcon } from '@chakra-ui/icons'
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
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { Key, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RetrieveASingleWORKOUTVideo } from '~/api/types'
import { useGetAPI, usePatchAPI, usePostAPI, useRemoveAPI } from '~/api/useHook'
import deleteIcon from '~/assets/icons/delete.svg'
import SVG from '~/components/SVG'

export const ContentNote = () => {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, refetch } =
    useGetAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/${contentType}/${contentId}/`,
    })

  let note = contentDetails?.note

  const [noteText, setNoteText] = useState<string>('')
  const [noteId, setNoteId] = useState<Key | string | number | null>(null)

  const { mutateAsync: postNote, isLoading: isPosting } =
    usePostAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/note/${contentType}/${contentId}/`,
      data: { note: noteText },
    })
  const { mutateAsync: patchNote, isLoading: isPatching } =
    usePatchAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/note/${noteId}/`,
      data: { note: noteText },
    })
  const { mutateAsync: deleteNote, isLoading: isDeleting } =
    useRemoveAPI<RetrieveASingleWORKOUTVideo>({
      endpoint: `/content/note/${noteId}/`,
      data: { note: noteText },
    })

  const isAction = isPosting || isPatching || isDeleting

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleNoteEdit = (note?: { id: string | number; note: string }) => {
    setNoteId(note?.id ?? '')
    setNoteText(note?.note ?? '')
    onOpen()
  }

  const handleSubmit = async () => {
    if (noteId) {
      await patchNote()
        .then(() => refetch())
        .then(onClose)
    } else {
      await postNote()
        .then(() => refetch())
        .then(onClose)
    }
    setNoteId(null)
    setNoteText('')
  }

  return (
    <Flex direction="column" gap="16px">
      <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
        Personal note
      </Text>
      {note ? (
        <Flex key={note?.id} gap="16px">
          <Text
            onClick={() => handleNoteEdit(note)}
            cursor="pointer"
            overflow="auto"
            w="100%"
          >
            {note?.note}
          </Text>
          <Button
            variant="white"
            ml="auto"
            onClick={() => {
              handleNoteEdit(note)
              onOpen()
            }}
          >
            Edit
          </Button>
        </Flex>
      ) : (
        <Button variant="white" ml="auto" onClick={onOpen}>
          Add note
        </Button>
      )}
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
              <ModalHeader whiteSpace="nowrap">Note</ModalHeader>

              {noteId ? (
                <SVG
                  src={deleteIcon}
                  alt="Delete Note"
                  cursor="pointer"
                  onClick={() => deleteNote()}
                />
              ) : (
                <div></div>
              )}
            </Flex>
            <Textarea
              wrap="wrap"
              variant="unstyled"
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="Note your weights or anything else..."
              h="100%"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => handleSubmit()}
              w="100%"
              isDisabled={isAction}
            >
              {noteId ? 'Update' : 'Save'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
