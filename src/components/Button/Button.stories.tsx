import { Button, Flex, Stack, Text } from '@chakra-ui/react'

import FilledStarWhite from '../../assets/icons/star-filled-white.svg'
import FilledStar from '../../assets/icons/star-filled.svg'
import SVG from '../SVG'

export default {
  component: Button,
  title: 'components/Buttons',
}

export const ButtonView = () => (
  <Stack direction="column">
    <Text>Large</Text>
    <Flex gap="8">
      <Button size="lg" variant="primary">
        Label
      </Button>
      <Button size="lg" variant="white">
        Label
      </Button>
      <Button size="lg" variant="text">
        Label
      </Button>
      <Button
        size="lg"
        variant="primary"
        leftIcon={<SVG alt="" src={FilledStarWhite} />}
      >
        Label
      </Button>
      <Button
        size="lg"
        variant="white"
        rightIcon={<SVG alt="" src={FilledStar} />}
      >
        Label
      </Button>
      <Button size="lg" variant="primary">
        <SVG alt="" src={FilledStarWhite} />
      </Button>
    </Flex>
    <Text>Medium</Text>
    <Flex gap="8">
      <Button size="md" variant="primary">
        Label
      </Button>
      <Button size="md" variant="white">
        Label
      </Button>
      <Button size="md" variant="text">
        Label
      </Button>
      <Button
        size="md"
        variant="primary"
        leftIcon={<SVG alt="" src={FilledStarWhite} />}
      >
        Label
      </Button>
      <Button
        size="md"
        variant="white"
        rightIcon={<SVG alt="" src={FilledStar} />}
      >
        Label
      </Button>
      <Button size="md" variant="primary">
        <SVG alt="" src={FilledStarWhite} />
      </Button>
    </Flex>
    <Text>Small</Text>
    <Flex gap="8">
      <Button size="sm" variant="primary">
        Label
      </Button>
      <Button size="sm" variant="white">
        Label
      </Button>
      <Button size="sm" variant="text">
        Label
      </Button>
      <Button
        size="sm"
        variant="primary"
        leftIcon={<SVG alt="" src={FilledStarWhite} />}
      >
        Label
      </Button>
      <Button
        size="sm"
        variant="white"
        rightIcon={<SVG alt="" src={FilledStar} />}
      >
        Label
      </Button>
      <Button size="sm" variant="primary">
        <SVG alt="" src={FilledStarWhite} />
      </Button>
    </Flex>
    <Text>XS</Text>
    <Flex gap="8">
      <Button size="xs" variant="primary">
        Label
      </Button>
      <Button size="xs" variant="white">
        Label
      </Button>
      <Button size="xs" variant="text">
        Label
      </Button>
      <Button
        size="xs"
        variant="primary"
        leftIcon={<SVG alt="" src={FilledStarWhite} />}
      >
        Label
      </Button>
      <Button
        size="xs"
        variant="white"
        rightIcon={<SVG alt="" src={FilledStar} />}
      >
        Label
      </Button>
      <Button size="xs" variant="primary">
        <SVG alt="" src={FilledStarWhite} />
      </Button>
    </Flex>
  </Stack>
)
