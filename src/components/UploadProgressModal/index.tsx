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
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { patch } from '~/api'
import { GetListOfProgressPhotos } from '~/api/types'
import { useGetInfiniteAPI, usePostAPI } from '~/api/useHook'
import closeBtn from '~/assets/icons/closeBtn.svg'

import { imagetype } from '../Inputs/Dropzone'
import SVG from '../SVG'

type UploadProgressModalProps = {
  isOpen: boolean
  toggleModal: (isOpen: boolean) => void
  setShowTagResults?: (isOpen: boolean) => void
  children: React.ReactNode
  setSelectedTags?: (value: any) => void
  images: imagetype[]
  isUploadComplete: boolean
  setIsUploadComplete: (isUploadComplete: boolean) => void
}

type preSignedUrlsDataTypes = {
  id: string
  image_upload_urls: {
    front?: {
      url: string
      data: {
        key: string
        'Content-Type': string
        AWSAccessKeyId: string
        policy: string
        signature: string
      }
      key: string
    }
    back?: {
      url: string
      data: {
        key: string
        'Content-Type': string
        AWSAccessKeyId: string
        policy: string
        signature: string
      }
      key: string
    }
    side?: {
      url: string
      data: {
        key: string
        'Content-Type': string
        AWSAccessKeyId: string
        policy: string
        signature: string
      }
      key: string
    }
  }
}

export default function UploadProgressModal({
  isOpen,
  toggleModal,
  children,
  images,
  isUploadComplete,
  setIsUploadComplete,
}: UploadProgressModalProps) {
  const [preSignedUrls, setPreSignedUrls] = useState<preSignedUrlsDataTypes>()
  const { refetch } = useGetInfiniteAPI<GetListOfProgressPhotos>({
    endpoint: '/user/progress-photo/',
  })
  const { mutateAsync: postProgressPics } = usePostAPI({
    endpoint: '/user/progress-photo-upload/',
    data: {
      images: {
        front: {
          image: encodeURI(
            images.filter(image => image.angle === 'front')[0]?.name ?? '',
          ),
          content_type: images.filter(image => image.angle === 'front')[0]
            ?.type,
        },
        back: {
          image: encodeURI(
            images.filter(image => image.angle === 'back')[0]?.name ?? '',
          ),
          content_type: images.filter(image => image.angle === 'back')[0]?.type,
        },
        side: {
          image: encodeURI(
            images.filter(image => image.angle === 'side')[0]?.name ?? '',
          ),
          content_type: images.filter(image => image.angle === 'side')[0]?.type,
        },
      },
    },
  })

  const UploadToS3 = async () => {
    if (preSignedUrls !== undefined) {
      const { front, back, side } = preSignedUrls?.image_upload_urls
      const preSignedUrlsArray = []
      preSignedUrlsArray.push(front)
      preSignedUrlsArray.push(back)
      preSignedUrlsArray.push(side)

      const angleArr = ['front', 'back', 'side']
      const promises = preSignedUrlsArray.map(async (preSignedImages, i) => {
        const formData = new FormData()
        if (preSignedImages !== undefined) {
          formData.append('key', preSignedImages?.data.key)
          formData.append(
            'AWSAccessKeyId',
            preSignedImages?.data.AWSAccessKeyId,
          )
          formData.append('policy', preSignedImages?.data.policy)
          formData.append('signature', preSignedImages?.data.signature)
          formData.append(
            'Content-Type',
            images.filter(image => image.angle === angleArr[i])[0]?.type ?? '',
          )
          formData.append(
            'file',
            images.filter(image => image.angle === angleArr[i])[0]?.file,
          )
          const response = await axios.post(preSignedImages.url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          return response
        }
      })

      return Promise.all(promises)
    }
  }

  const patchPresisnedPhotos = async (id = '') => {
    const ProgressPhotos: any = {
      images: {
        front: encodeURI(
          images.filter(image => image.angle === 'front')[0]?.name ?? '',
        ),
        back: encodeURI(
          images.filter(image => image.angle === 'back')[0]?.name ?? '',
        ),
        side: encodeURI(
          images.filter(image => image.angle === 'side')[0]?.name ?? '',
        ),
      },
    }

    patch(`/user/progress-photo/${id}/`, ProgressPhotos).catch(e =>
      console.log(e),
    )
  }

  const UploadProgressPictures = async () => {
    if (images.length === 3) {
      // TODO: TECH DEBT ANY
      const preSignedData = (await postProgressPics()) as any
      await setPreSignedUrls(preSignedData)
      await UploadToS3()
      await patchPresisnedPhotos(preSignedData?.id ?? '')
      await setIsUploadComplete(!isUploadComplete)
      toggleModal(!isOpen)
    }
  }

  useEffect(() => {
    if (isUploadComplete) {
      refetch()
    }
  }, [isUploadComplete])

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
            <Box cursor="pointer" onClick={() => toggleModal(!isOpen)}>
              <SVG src={closeBtn} alt="" />
            </Box>
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
              w="100%"
              variant="primary"
              onClick={() => UploadProgressPictures()}
            >
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}
