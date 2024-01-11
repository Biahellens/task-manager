// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

interface Task {
  id: number;
  description: string;
  status: string;
}

// eslint-disable-next-line import/prefer-default-export
export const useTableTaskStore = defineStore('tableTask', {
  state: () => ({
    hover: false,
    tasks: [] as Task[],
    sortingOrder: 'asc' as 'asc' | 'desc',
  }),
  actions: {
    async toggleSortingOrder() {
      this.sortingOrder = this.sortingOrder === 'asc' ? 'desc' : 'asc';
    },

    async getTasks() {
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
        const response = await axios.get('http://localhost:3000/tasks/getTasksByUser', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        this.tasks = response.data.tasks;
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    },

    async finishTask(taskId: number) {
      function getCookie(name: string) {
        // eslint-disable-next-line prefer-template
        const cookieValue = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
      }

      const authToken = getCookie('token');
      try {
        if (!authToken) {
          console.error('Token de autenticação não disponível');
          return;
        }

        const response = await axios.put(`http://localhost:3000/tasks/${taskId}/finish`, {}, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const updatedTask = response.data.task;

        this.tasks = this.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
      } catch (error) {
        console.error('Erro ao finalizar tarefa:', error);
      }
    },

    async deleteTask(taskId: number) {
      function getCookie(name: string) {
        // eslint-disable-next-line prefer-template
        const cookieValue = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
      }

      const authToken = getCookie('token');
      try {
        if (!authToken) {
          console.error('Token de autenticação não disponível');
          return;
        }

        await axios.delete(`http://localhost:3000/tasks/${taskId}/deleted`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
      }
    },
  },
});
