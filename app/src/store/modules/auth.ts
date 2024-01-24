// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
import { RouteLocationRaw, Router } from 'vue-router';

// eslint-disable-next-line import/prefer-default-export
export const useAuthStore = defineStore('auth', {
  state: () => ({
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

      axios.post('http://localhost:3000/user/login', loginData).then((response) => {
        // eslint-disable-next-line prefer-destructuring
        const token = response.data.token;
        setCookie('token', token, 7);
        router.push('/tasks' as RouteLocationRaw);
      }).catch((error) => {
        console.error('Erro no login:', error);
        this.showErrorMessage = 'Erro ao realizar login';
      });
    },
    createdAccount(router: Router) {
      const accountData = {
        email: this.email,
        password: this.password,
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      axios.post('http://localhost:3000/user/createdAccount', accountData).then((response) => {
        // eslint-disable-next-line prefer-destructuring
        router.push('/login' as RouteLocationRaw);
      }).catch(() => {
        this.showErrorMessageCreatedAccount = 'Erro ao criar uma conta';
        console.log('Erro ao criar uma conta:', this.showErrorMessageCreatedAccount);
      });
    },
  },
});
