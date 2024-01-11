// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
import { RouteLocationRaw, Router } from 'vue-router';

// eslint-disable-next-line import/prefer-default-export
export const useAuthStore = defineStore('auth', {
  state: () => ({
    hover: false,
    email: '',
    password: '',
    showErrorMessage: '',
    showErrorMessageCreatedAccount: '',
  }),
  actions: {
    login(router: Router) {
      const loginData = {
        email: this.email,
        password: this.password,
      };

      function setCookie(name: string, value: string, days: number) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      }

      axios.post('http://localhost:3000/users/login', loginData).then((response) => {
        // eslint-disable-next-line prefer-destructuring
        const token = response.data.token;
        setCookie('token', token, 7);
        router.push('/tasks' as RouteLocationRaw);
      }).catch((error) => {
        console.error('Erro no login:', error);
        this.showErrorMessage = `${error.response.data.message}`;
      });
    },
    createdAccount(router: Router) {
      const accountData = {
        email: this.email,
        password: this.password,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      axios.post('http://localhost:3000/users/createdAccount', accountData).then((response) => {
        // eslint-disable-next-line prefer-destructuring
        router.push('/login' as RouteLocationRaw);
      }).catch((error) => {
        console.error('Erro ao criar conta:', error);
        this.showErrorMessageCreatedAccount = `${error.response.data.message}`;
      });
    },
  },
});
