import type { Meta, StoryObj } from '@storybook/vue3'
import PageHeading from './PageHeading.vue'

const meta = {
  title: 'Common/PageHeading',
  component: PageHeading,
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: { type: 'select' },
      options: ['書籍一覧', '書籍詳細', 'ユーザー登録', 'ユーザー管理', '書籍登録' ]
    }
  },
  args: {
    page: '書籍一覧'
  }
} satisfies Meta<typeof PageHeading>

export default meta
type Story = StoryObj<typeof meta>

export const BookList: Story = {
  args: {
    page: '書籍一覧'
  }
}
export const BookDetail: Story = {
  args: {
    page: '書籍詳細'
  }
}
export const BookRegistration: Story = {
  args: {
    page: '書籍登録'
  }
}
export const UserRegistration: Story = {
  args: {
    page: 'ユーザー登録'
  }
}
export const UserManagement: Story = {
  args: {
    page: 'ユーザー管理'
  }
}
