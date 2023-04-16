import { Flex, HStack, Skeleton } from '@chakra-ui/react'
import chevronLeft from '~/assets/icons/chevron-left.svg'
import chevronRight from '~/assets/icons/chevron-right.svg'
import LoadingText from '~/components/LoadingText/LoadingText'
import SVG from '~/components/SVG'

export default function VideoCaroselLoading(): JSX.Element {
  return (
    <Flex overflow="hidden" w="100%" direction="column">
      <Flex justifyContent="space-between" w="100%">
        <LoadingText />
        <Flex gap="32px">
          <HStack opacity={0.4} cursor="pointer" h="40px">
            <SVG src={chevronLeft} alt="arrow-left" />
          </HStack>
          <HStack cursor="pointer" opacity={0.4} h="40px">
            <SVG src={chevronRight} alt="arrow-right" />
          </HStack>
        </Flex>
      </Flex>
      <Flex gap="32px" justifyContent="space-between">
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
      </Flex>
    </Flex>
  )
}
