import {
  BoxProps,
  Flex,
  HStack,
  Text,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import chevronLeft from '~/assets/icons/chevron-left.svg'
import chevronRight from '~/assets/icons/chevron-right.svg'
import SVG from '~/components/SVG'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function VideoCarosel({
  videos,
  count,
  title,
  gapSize: initialGapSize,
}: {
  videos: any
  count: number
  gapSize: number
  title: string
}): JSX.Element {
  const [renderRange, setRenderRange] = useState(0)
  const [gapSize, setGapSize] = useState(initialGapSize) // default gap size

  useEffect(() => {
    setRenderRange(0)
  }, [videos])

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) {
        setGapSize(16)
      } else if (screenWidth < 768) {
        setGapSize(24)
      } else if (screenWidth < 1024) {
        setGapSize(32)
      } else {
        setGapSize(48)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isLeftArrowDisabled = renderRange < 1
  const isRightArrowDisabled = renderRange >= (count ?? 0) - 1

  return (
    <Flex overflow="hidden" w="100%" direction="column">
      <Flex justifyContent="space-between" w="100%">
        <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
          {title}
        </Text>
        <Flex gap="32px">
          <HStack
            onClick={() =>
              !isLeftArrowDisabled && setRenderRange(renderRange - 1)
            }
            opacity={isLeftArrowDisabled ? 0.4 : 1}
            cursor="pointer"
            h="40px"
          >
            <SVG src={chevronLeft} alt="arrow-left" />
          </HStack>
          <HStack
            onClick={() =>
              !isRightArrowDisabled && setRenderRange(renderRange + 1)
            }
            cursor="pointer"
            opacity={isRightArrowDisabled ? 0.4 : 1}
            h="40px"
          >
            <SVG src={chevronRight} alt="arrow-right" />
          </HStack>
        </Flex>
      </Flex>
      <ChakraBox
        display="flex"
        w="100%"
        h="100%"
        animate={{
          transform: `
          translate(-${(320 + gapSize) * renderRange}px)
           `,
        }}
        gap={`${gapSize}px`}
        layout
      >
        {videos.map(
          (
            content: JSX.IntrinsicAttributes & {
              id: string
              title: string
              subtitle?: string | undefined
              description: string
              duration?: number | null | undefined
              thumbnail?: string | null | undefined
              smaller_thumbnail_field?: string | null | undefined
              type: string
            } & BoxProps,
          ) => {
            return (
              <ChakraBox
                key={content.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                h="320px"
                w="320px"
              >
                <WorkoutCardThumbnail {...content} h="320px" w="320px" />
              </ChakraBox>
            )
          },
        )}
      </ChakraBox>
    </Flex>
  )
}
