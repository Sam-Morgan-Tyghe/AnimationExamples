import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'

import Dropzone, { imagetype } from '../Inputs/Dropzone'
import UploadProgressModal from '../UploadProgressModal'

type UploadBtnProps = {
  isUploadComplete: boolean
  setIsUploadComplete: (isUploadComplete: boolean) => void
}

export default function UploadImageBtn({
  isUploadComplete,
  setIsUploadComplete,
}: UploadBtnProps) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [images, setImages] = useState<imagetype[]>([])

  const onDrop = useCallback((acceptedFiles: any, angle: string) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()
      reader.onload = function (e) {
        setImages(
          prevState =>
            [
              ...prevState,
              {
                src: e.target && e.target.result,
                angle: angle,
                name: file.name,
                type: file.type,
                file: file,
              },
            ] as imagetype[],
        )
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  useEffect(() => {
    setImages([])
  }, [isOpen])

  return (
    <>
      <Button variant="white" onClick={onOpen}>
        Add new
      </Button>
      <UploadProgressModal
        isOpen={isOpen}
        toggleModal={onClose}
        images={images}
        isUploadComplete={isUploadComplete}
        setIsUploadComplete={setIsUploadComplete}
      >
        <Flex direction="column" p="12px" gap="40px" overflowY="scroll">
          <Text fontWeight="900" fontSize="32px">
            Progress
          </Text>
          <Text>
            Upload front, side and back photos. You can save your photos and
            track the progress during some period of time.
          </Text>
          <Flex align="center" gap="24px" justify="center">
            <Flex direction="column" gap="16px" p="0px 0px 16px" align="center">
              <Dropzone
                onDrop={(acceptedFiles: any) => onDrop(acceptedFiles, 'front')}
                accept="image/*"
                image={images.find(image => image.angle === 'front')}
                setImages={setImages}
                images={images}
              />
              <Text>Front</Text>
            </Flex>
            <Flex direction="column" gap="16px" p="0px 0px 16px" align="center">
              <Dropzone
                onDrop={(acceptedFiles: any) => onDrop(acceptedFiles, 'side')}
                accept="image/*"
                image={images.find(image => image.angle === 'side')}
                setImages={setImages}
                images={images}
              />
              <Text>Side</Text>
            </Flex>
            <Flex direction="column" gap="16px" p="0px 0px 16px" align="center">
              <Dropzone
                onDrop={(acceptedFiles: any) => onDrop(acceptedFiles, 'back')}
                accept="image/*"
                image={images.find(image => image.angle === 'back')}
                setImages={setImages}
                images={images}
              />
              <Text>Back</Text>
            </Flex>
          </Flex>
        </Flex>
      </UploadProgressModal>
    </>
  )
}
