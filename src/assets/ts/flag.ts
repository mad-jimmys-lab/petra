const Flag = {
  OFF: '0',
  ON: '1'
} as const

export type Flag = (typeof Flag)[keyof typeof Flag]
export default Flag
