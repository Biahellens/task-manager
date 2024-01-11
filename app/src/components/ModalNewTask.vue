<template>
  <div class="modal-newTask" v-if="visible">
    <div class="modal-contentMain">
      <div class="modalHeader">
        <div class="modal-HeaderTitle">
          <h3 class="titleNewTask">Criar uma Nova Tarefa</h3>
        </div>
      </div>
      <div class="contentModal">
        <p class="textNewTask">Descrição:</p>
        <form class="formNewTask" @submit.prevent="createTask">
          <input v-model="description" class="inputDescription" />
        </form>
        <div>
          <button type="submit" class="newTaskButton" @click="createTask">Salvar</button>
        </div>
      </div>
      <transition name="fade">
        <div v-if="error" class="errorNotification">
          {{ error }}
        </div>
      </transition>
      <div class="close-buttonContent">
        <button class="newTaskButton-close" @click="closeModal">x</button>
      </div>
      <div v-if="taskCreated" class="newTaskAnimation">
        <img class="imgNewTaskAnimation" src="../assets/done.svg" alt="Imagem de conclusão" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { useModalStore } from '../store/modules/modalStore';

export default class modalNewTask extends Vue {
  private modalStore = useModalStore();

  private get visible() {
    return this.modalStore.visible;
  }

  private get taskCreated() {
    return this.modalStore.taskCreated;
  }

  private get description() {
    return this.modalStore.description;
  }

  private set description(value: string) {
    this.modalStore.description = value;
  }

  private get error() {
    return this.modalStore.error;
  }

  private openModal() {
    this.modalStore.openModal();
  }

  private closeModal() {
    this.modalStore.closeModal();
  }

  private createTask() {
    this.modalStore.createTask();
  }
}
</script>

<style scoped>
.modal-newTask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-contentMain {
  width: 400px;
  height: 320px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  z-index: 1001;
  flex-flow: column;
  position: absolute;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px;
  }
}

.modalHeader {
  width: 100%;
  height: 100px;
  border-radius: 15px 15px 0 0;

  background-color: #a8a8fb;
  display: flex;
  justify-content: center;
  position: relative;
}

.modal-HeaderTitle {
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 90%;
  transform: translateY(-50%);

  border-radius: 15px;
  background-color: #f8f7f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contentModal {
  width: 80%;
  height: auto;
  margin-top: 60px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.inputDescription {
  width: 100%;
  height: 25px;
  margin-bottom: 10px;

  background-color: #ffffff;
  border: 2px solid #a8a8fb;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  text-align: start;
  font-size: 12px;
}

.newTaskButton {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;

  font-size: 14px;
  margin-left: 4px;

  background-color: #4b0082;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.newTaskButton-close {
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
}

.close-buttonContent {
  position: absolute;
  top: 10px;
  right: 10px;
}

.titleNewTask {
  color: #4b0082;
}

.textNewTask {
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  margin: 4px;
  width: 100%;
}

.formNewTask {
  width: 100%;
}

.errorNotification {
  color: #fff;
  background-color: #ff4c4c;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.imgNewTaskAnimation {
  width: 400px;
  height: 400px;
}

.newTaskAnimation {
  animation: fadeInOut 2s ease-in-out;
  z-index: 1002;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>
../store/modules/modules/modalStore
