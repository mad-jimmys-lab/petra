const AuthorityRole = {
  ADMIN: {
    code: '0',
    name: 'admin'
  },
  USER: {
    code: '1',
    name: 'user'
  }
} as const

export type AuthorityRole = (typeof AuthorityRole)[keyof typeof AuthorityRole]
export default AuthorityRole
