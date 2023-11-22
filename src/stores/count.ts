import { defineStore } from 'pinia'

export const useCount = defineStore('count', {
  //保持したいデータ
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double: (state) => {
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
    clearCount() {
      this.count = 0
    },
  },
})