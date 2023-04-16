import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { AppHeader } from './'

export default {
  title: 'components/AppHeader',
  component: AppHeader,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof AppHeader>

export const Default: ComponentStory<typeof AppHeader> = () => <AppHeader />
