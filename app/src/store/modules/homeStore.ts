// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useHomeStore = defineStore('home', {
  state: () => ({
    hover: false,
  }),
  actions: {
  },
});
