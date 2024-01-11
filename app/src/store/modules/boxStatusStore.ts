// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

interface TaskStatus {
  text: string;
  count: string;
}

// eslint-disable-next-line import/prefer-default-export
export const useBoxStatusStore = defineStore('boxStatus', {
  state: () => ({
    hover: false,
    taskStatusCounts: [] as TaskStatus[],
  }),
  actions: {

    async getTasksStatus() {
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

      try {
        const response = await axios.get('http://localhost:3000/tasks/getTaskStatusCount', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        this.taskStatusCounts = Object.keys(response.data.statusCounts).map((status) => ({
          text: status,
          count: response.data.statusCounts[status],
        }));
      } catch (error) {
        console.error('Erro ao buscar status das tarefas:', error);
      }
    },
  },
});
