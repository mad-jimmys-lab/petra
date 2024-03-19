import type { Meta, StoryObj } from '@storybook/vue3'
import AppLogo from './AppLogo.vue'

const meta = {
  title: 'Common/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
  args: {
    page: 'string'
  }
} satisfies Meta<typeof AppLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  args: {
    page: 'login'
  }
}

export const Header: Story = {
  args: {
    page: 'header'
  }
}
