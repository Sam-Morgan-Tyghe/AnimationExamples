import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { Button } from './components/button'
import { Form } from './components/form'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Select } from './components/select'
import { skeletonTheme } from './components/skeleton'
import { Text } from './components/text'
import { Switch } from './components/switch'

const fonts = {
  heading: `'Helvetica Now Display', sans-serif`,
  body: `'Helvetica Now Text', sans-serif`,
}

const shadows = {
  xs: '0px 0px 3px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.08)',
  sm: '0px 0px 6px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.04)',
  md: '0px 3px 12px rgba(0, 0, 0, 0.08)',
  lg: '0px 8px 24px rgba(0, 0, 0, 0.08)',
  xl: '0px 8px 36px rgba(0, 0, 0, 0.08)',
  xxl: '0px 16px 64px rgba(0, 0, 0, 0.08)',
}

export const theme = extendTheme({
  colors,
  fonts,
  shadows,
  components: {
    Skeleton: skeletonTheme,
    Heading,
    Button,
    Input,
    Form,
    Text,
    Select,
    Switch,
  },
})
