// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
import { Router } from 'vue-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useVerticalBarStore = defineStore('verticalBar', {
  state: () => ({
    hover: false,
  }),
  actions: {
    logout(router: Router) {
      function setCookie(name: string, value: string, days: number) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      }

      function getCookie(name: string) {
        // eslint-disable-next-line prefer-template
        const cookieValue = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
      }

      const authToken = getCookie('token');

      if (!authToken) {
        console.error('Token de autenticação não disponível');
        return;
      }

      axios.post('http://localhost:3000/user/logout', null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then(() => {
        setCookie('token', '', -1);
        localStorage.removeItem('token');
        router.push('/login');
      }).catch((error) => {
        console.error('Erro no logout:', error.response.data.message);
      });
    },
  },
});
