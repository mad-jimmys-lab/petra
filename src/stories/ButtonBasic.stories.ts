import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import ButtonBasic from './ButtonBasic.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Common/ButtonBasic',
  component: ButtonBasic,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // argTypes: {
  //   size: { control: 'select', options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' }
  // },
  args: {
    title: 'button',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    clickEvent: fn()
  }
} satisfies Meta<typeof ButtonBasic>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Login: Story = {
  args: {
    title: 'Login'
  }
}

// export const Secondary: Story = {
//   args: {
//     primary: false,
//     label: 'Button'
//   }
// }

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'large'
//   }
// }

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'small'
//   }
// }
