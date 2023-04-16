import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PulseLoader } from '.'

export default {
  title: 'components/PulseLoader',
  component: PulseLoader,
} as ComponentMeta<typeof PulseLoader>

export const Default: ComponentStory<typeof PulseLoader> = () => (
  <PulseLoader></PulseLoader>
)
