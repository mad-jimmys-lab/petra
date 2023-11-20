import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
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
  },
})