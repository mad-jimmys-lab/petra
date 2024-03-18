import type { Meta, StoryObj } from '@storybook/vue3'
import MainHeader from './MainHeader.vue'

const meta = {
  title: 'Example/MainHeader',
  component: MainHeader,
  render: (args: any) => ({
    components: { MainHeader },
    setup() {
      return { args }
    },
    template: '<main-header />'
  }),
  tags: ['autodocs']
} satisfies Meta<typeof MainHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {}
