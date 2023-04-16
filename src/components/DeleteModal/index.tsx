import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import {
  GetListOfProgressPhotos,
  GetListOfProgressPhotosResult,
} from '~/api/types'
import { useGetInfiniteAPI, useRemoveAPI } from '~/api/useHook'
import { formatDate } from '~/utils/helper'

type DeleteModalProps = {
  isOpen: boolean
  onClose: (isOpen: boolean) => void
  currentProgressPhotos?: GetListOfProgressPhotosResult
  progressPhotos?: GetListOfProgressPhotosResult[]
  setProgressPhotos: (progressPhotos: GetListOfProgressPhotosResult[]) => void
}

export default function DeleteModal({
  isOpen,
  onClose,
  currentProgressPhotos,
  progressPhotos,
  setProgressPhotos,
}: DeleteModalProps) {
  const { mutate: DeleteProgressPhoto, isSuccess: isProgressPhotoDelete } =
    useRemoveAPI({
      endpoint: `/user/progress-photo/${currentProgressPhotos?.id}/`,
    })
  const { refetch } = useGetInfiniteAPI<GetListOfProgressPhotos>({
    endpoint: '/user/progress-photo/',
  })
  const DeleteProgressPhotos = async () => {
    await DeleteProgressPhoto()
    const newProgressPhotos = progressPhotos?.filter(
      progPhotos => progPhotos.id !== currentProgressPhotos?.id,
    )
    if (newProgressPhotos !== undefined && newProgressPhotos !== null) {
      setProgressPhotos(newProgressPhotos)
    }

    onClose(!isOpen)
  }

  useEffect(() => {
    if (isProgressPhotoDelete) {
      refetch()
    }
  }, [isProgressPhotoDelete])

  return (
    <Modal isOpen={isOpen} onClose={() => onClose(!isOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Progress Photos</ModalHeader>
        <ModalBody>
          {`Are you sure you want to delete your progress photos you uploaded on ${formatDate(
            String(currentProgressPhotos?.created_at),
          )}?`}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={() => onClose(!isOpen)}>
            Cancel
          </Button>
          <Button
            bg="error.75"
            _hover={{ bg: 'error.50' }}
            color="white"
            onClick={() => DeleteProgressPhotos()}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
