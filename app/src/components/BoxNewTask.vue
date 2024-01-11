<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div
    class="boxNewTask"
  >
    <div class="boxTextArea">
      <p>Criar uma Nova Tarefa</p>
      <img class="newTaskImg" alt="new-task" src="../assets/new-task.svg" />
    </div>
    <button class="buttonNewTask" @click="openModal">Nova Task</button>
    <ModalNewTask ref="modalComponent" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ModalNewTask from './ModalNewTask.vue';

@Options({
  components: {
    ModalNewTask,
  },
})
export default class boxNewTask extends Vue {
  openModal() {
    if (this.$refs.modalComponent) {
      (this.$refs.modalComponent as any).openModal();
    }
  }
}
</script>

<style scoped>
  .boxNewTask {
    width: 180px;
    height: 140px;
    border-radius: 20px;
    border: solid 2px #a8a8fb;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #b0b0b0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      width: 140px;
      height: 110px;
      border-radius: 16px;
    }
  }

  .boxTextArea {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      width: 90%;
      font-size: 14px;
    }
  }

  .newTaskImg {
    width: 40px;
    height: 40px;

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  .buttonNewTask {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    background-color: #a8a8fb;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    @media (max-width: 768px) {
      width: 120px;
      height: 30px;
      margin: 4px;
    }
  }
</style>
