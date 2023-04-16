import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import { useNavigate } from 'react-router-dom'

import muteIcon from '../../assets/icons/muteIcon.svg'
import soundIcon from '../../assets/icons/soundIcon.svg'
import stopwatch from '../../assets/icons/stopwatch.svg'
import defaultThumbnail from '../../assets/images/caroline.jpg'
import video from '../../assets/images/testing.webm'
import SVG from '../SVG'

type WorkoutCardProps = {
  id: string
  title: string
  subtitle?: string | null
  description: string
  duration?: number | null
  thumbnail?: string | null
  smaller_thumbnail_field?: string | null
  type: string
}

export default function WorkoutCard({
  id,
  title,
  subtitle,
  description,
  duration,
  type,
  smaller_thumbnail_field = '',
  thumbnail = defaultThumbnail,
  ...props
}: WorkoutCardProps & BoxProps) {
  const [isMuted, setIsMuted] = useState(true)
  const navigate = useNavigate()

  return (
    <Flex
      pos="relative"
      borderRadius="8px"
      onClick={() => navigate(`../../content/${type}/${id}`)}
      {...props}
    >
      <HoverVideoPlayer
        videoSrc={video}
        videoStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          borderRadius: '8px',
        }}
        muted={isMuted}
        pausedOverlay={
          <Flex direction="column" pos="relative" h="100%">
            <Image
              pos="absolute"
              maxH="100%"
              borderRadius="8px"
              w="100%"
              src={thumbnail ?? ''}
              alt="thumbnail"
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
                <Flex
                  w="66px"
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
                    3 / 50
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column" gap="12px">
                <Text
                  fontSize="24px"
                  fontWeight="900"
                  lineHeight="24px"
                  color="white"
                >
                  MIGHTY Full Body Workout
                </Text>
                <Flex
                  justify="space-between"
                  align="center"
                  color="rgba(235, 245, 255, 0.75)"
                >
                  <Text fontWeight="700" fontSize="12px">
                    Dumbbell
                  </Text>
                  <Flex align="center" gap="4px">
                    <SVG src={stopwatch} alt="duration" />
                    <Text fontWeight="700" fontSize="12px">
                      30 MIN
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        }
        hoverOverlay={
          <Flex direction="column" pos="relative" h="100%">
            <Flex
              position="absolute"
              h="100%"
              w="100%"
              direction="column"
              justify="space-between"
              p="24px"
              zIndex="100"
            >
              <Flex align="center" justify="space-between">
                <Flex
                  w="66px"
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
                    3 / 50
                  </Text>
                </Flex>
                {isMuted ? (
                  <Box cursor="pointer" onClick={() => setIsMuted(!isMuted)}>
                    <SVG src={muteIcon} alt="mute icon" />
                  </Box>
                ) : (
                  <Box cursor="pointer" onClick={() => setIsMuted(!isMuted)}>
                    <SVG src={soundIcon} alt="unmute icon" />
                  </Box>
                )}
              </Flex>
              <Flex direction="column" gap="12px">
                <Text
                  fontSize="24px"
                  fontWeight="900"
                  lineHeight="24px"
                  color="white"
                >
                  MIGHTY Full Body Workout
                </Text>
                <Flex
                  justify="space-between"
                  align="center"
                  color="rgba(235, 245, 255, 0.75)"
                >
                  <Text fontWeight="700" fontSize="12px">
                    Dumbbell
                  </Text>
                  <Flex align="center" gap="4px">
                    <SVG src={stopwatch} alt="duration" />
                    <Text fontWeight="700" fontSize="12px">
                      30 MIN
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        }
      />
    </Flex>
  )
}
