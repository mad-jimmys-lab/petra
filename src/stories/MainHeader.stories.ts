import type { Meta, StoryObj } from '@storybook/vue3'
import MainHeader from './MainHeader.vue'

const meta = {
  title: 'Modules/MainHeader',
  component: MainHeader,
  tags: ['autodocs'],
  argTypes: {
    authorityRole: {
      control: { type: 'select' },
      options: ['admin', 'user']
    }
  },
  args: {
    authorityRole: 'admin'
  }
} satisfies Meta<typeof MainHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Admin: Story = {
  args: {
    authorityRole: 'admin'
  }
}
export const User: Story = {
  args: {
    authorityRole: 'user'
  }
}
