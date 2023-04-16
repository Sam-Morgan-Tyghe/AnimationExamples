import { Text } from '@chakra-ui/react'

const LoadingText = ({ text }: { text?: string }) => {
  return (
    <Text
      sx={{
        'span:before': {
          animation: 'dots 2s linear infinite;',
          content: '""',
        },

        '@keyframes dots': {
          ' 0%, 20%': {
            content: "'.'",
          },
          ' 40%': {
            content: "'..'",
          },
          ' 60%': {
            content: "'...'",
          },
          ' 90%, 100%': {
            content: "''",
          },
        },
      }}
    >
      {text || 'Loading'}
      <span />
    </Text>
  )
}

export default LoadingText
