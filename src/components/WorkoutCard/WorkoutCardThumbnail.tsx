import { BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import lock from '~/assets/icons/Lock.svg'
import stopwatch from '~/assets/icons/stopwatch.svg'

import SVG from '../SVG'

type WorkoutCardProps = {
  id?: string | number
  title?: string
  subtitle?: string | null
  description?: string
  duration?: number | null
  thumbnail?: string | null
  smaller_thumbnail_field?: string | null
  type?: string
  day?: string | null
  locked?: boolean
  isShowingTitle?: boolean
}

export default function WorkoutCardThumbnail({
  id,
  title,
  subtitle,
  description,
  duration,
  type,
  smaller_thumbnail_field = '',
  thumbnail = '',
  day,
  locked,
  isShowingTitle,
  ...props
}: WorkoutCardProps & BoxProps) {
  return (
    <Flex
      pos="relative"
      borderRadius="8px"
      cursor="pointer"
      {...props}
      role="group"
      overflow="hidden"
      as={Link}
      to={`../../content/${type}/${id}`}
    >
      <Flex direction="column" pos="relative" h="100%" w="100%">
        <Image
          maxH="100%"
          w="100%"
          h="100%"
          src={thumbnail ?? ''}
          alt="thumbnail"
          filter={locked ? 'grayscale(1)' : 'none'}
          transition="transform 1.5s ease"
          pos="absolute"
          objectFit="cover"
          _groupHover={{ transform: 'scale(1.2)', border: 'red' }}
        />

        <Flex
          position="relative"
          h="100%"
          direction="column"
          justify="space-between"
          p="24px"
          zIndex="100"
        >
          <Flex align="center" justify="space-between">
            <Flex align="center" gap="8px">
              {day ? (
                <Flex
                  h="32px"
                  justify="center"
                  align="center"
                  bg="white"
                  p="6px 12px"
                  boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
                  borderRadius="8px"
                >
                  <Text
                    fontFamily="Helvetica"
                    fontSize="14px"
                    fontWeight="700"
                    lineHeight="20px"
                  >
                    {day}
                  </Text>
                </Flex>
              ) : (
                <Flex></Flex>
              )}
              {locked && (
                <Flex
                  h="32px"
                  justify="center"
                  align="center"
                  bg="white"
                  p="6px 12px"
                  boxShadow="0px 8px 24px rgba(10, 32, 57, 0.04)"
                  borderRadius="8px"
                  gap="8px"
                >
                  <SVG src={lock} alt="" />
                  <Text
                    fontFamily="Helvetica"
                    fontSize="14px"
                    fontWeight="700"
                    lineHeight="20px"
                  >
                    Locked
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
          <Flex direction="column" gap="12px">
            <Text
              fontSize="24px"
              fontWeight="900"
              lineHeight="24px"
              color="white"
            >
              {title}
            </Text>

            <Flex
              justify="space-between"
              align="center"
              color="rgba(235, 245, 255, 0.75)"
            >
              <Text fontWeight="700" fontSize="12px">
                {subtitle}
              </Text>
              <Flex align="center" gap="4px">
                {!!duration && (
                  <>
                    <SVG src={stopwatch} alt="duration" />

                    <Text fontWeight="700" fontSize="12px">
                      {duration && (duration / 60).toFixed(0)}
                    </Text>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
