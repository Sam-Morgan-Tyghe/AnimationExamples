import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppLayout } from './'

export default {
  title: 'layouts/AppLayout',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>

export const Default: ComponentStory<typeof AppLayout> = () => <AppLayout />
