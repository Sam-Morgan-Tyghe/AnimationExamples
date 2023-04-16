import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import deleteIcon from '~/assets/icons/delete.svg'

import SVG from '../../SVG'

export type imagetype = {
  src: string
  angle: string
  name?: string
  type?: string
  file?: any
}

type DropzoneProps = {
  onDrop: any
  accept: any
  images: imagetype[]
  setImages: React.Dispatch<React.SetStateAction<imagetype[]>>
  image?: imagetype
}

export default function Dropzone({
  onDrop,
  accept,
  images,
  setImages,
  image,
}: DropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
  })

  const removeImage = (angle: string) => {
    return setImages(images.filter(item => item.angle !== angle))
  }

  return (
    <Flex
      borderRadius="8px"
      bg="rgba(15, 21, 38, 0.04)"
      justify="center"
      align="center"
      w="192px"
      h="192px"
      pos="relative"
    >
      {image ? (
        <>
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={image?.src ?? ''}
            borderRadius="8px"
          />
          <Flex
            position="absolute"
            top="10px"
            right="10px"
            cursor="pointer"
            onClick={() => removeImage(image.angle)}
          >
            <SVG src={deleteIcon} alt="" />
          </Flex>
        </>
      ) : (
        <Flex {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Flex className="text-center">
            {isDragActive ? (
              <Text cursor="pointer" className="dropzone-content">
                Release photo
              </Text>
            ) : (
              <Text cursor="pointer" className="dropzone-conent">
                Upload a photo
              </Text>
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
