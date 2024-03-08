const Flag = {
  OFF: {
    code: '0',
    name: 'OFF'
  },
  ON: {
    code: '1',
    name: 'ON'
  }
} as const

export type Flag = (typeof Flag)[keyof typeof Flag]
export default Flag
