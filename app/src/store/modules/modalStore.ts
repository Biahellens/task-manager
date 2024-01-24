// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

interface ModalState {
  visible: boolean;
  taskCreated: boolean;
  description: string;
  error: string;
}

// eslint-disable-next-line import/prefer-default-export
export const useModalStore = defineStore('modal', {
  state: (): ModalState => ({
    visible: false,
    taskCreated: false,
    description: '',
    error: '',
  }),
  actions: {
    openModal() {
      this.visible = true;
    },

    closeModal() {
      this.visible = false;
      this.error = '';
    },

    async createTask() {
      const { description } = this;
      const taskData = { description };

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
        const response = await axios.post('http://localhost:3000/tasks/createTask', taskData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        this.taskCreated = true;

        setTimeout(() => {
          this.closeModal();
          this.taskCreated = false;
        }, 2000);
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        this.error = 'Já existe uma tarefa com essa descrição';
      }
    },
  },
});
