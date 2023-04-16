import { Box, BoxProps, Skeleton } from '@chakra-ui/react'

export default function PulseLoader({ children, ...boxProps }: BoxProps) {
  const customStyle = {
    px: '4',
    py: '5',
    rounded: 'sm',
    borderRadius: '8px',
    borderWidth: '2px',
    _hover: {
      bg: 'primary.blue.100',
      borderColor: 'primary.blue.500',
    },
    _active: {
      bg: 'primary.blue.100',
      borderColor: 'primary.blue.500',
    },
  }

  return (
    <Skeleton w="100%" h="100%">
      <Box {...customStyle} {...boxProps}>
        {children}
      </Box>
    </Skeleton>
  )
}
