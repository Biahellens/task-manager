<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div class="boxStatusTasks" @mouseover="hover = true" @mouseleave="hover = false">
    <div v-for="status in statusCounts" :key="status.status" class="box">
      <img
        v-if="statusCounts && status.text === 'pending'"
        class="imgStatus"
        alt="progress-task"
        src="../assets/progress-task.svg"
      />
      <img
        v-if="status && status.text === 'finished'"
        class="imgStatus"
        alt="completed-task"
        src="../assets/completed-task.svg"
      />
      <p class="textStatus">
        {{ status && status.text === 'pending' ? 'Em Progresso' : 'Concluído' }}
      </p>
      <p class="numberStatus">{{ status.count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { useBoxStatusStore } from '../store/modules/boxStatusStore';

export default class boxStatusTasks extends Vue {
  private boxStatusStore = useBoxStatusStore();

  private get hover() {
    return this.boxStatusStore.hover;
  }

  private set hover(value: boolean) {
    this.boxStatusStore.hover = value;
  }

  private get statusCounts() {
    return this.boxStatusStore.taskStatusCounts;
  }

  async mounted() {
    await this.boxStatusStore.getTasksStatus();
  }
}
</script>

<style scoped>
.boxStatusTasks {
  width: 60%;
  height: 140px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  background-color: #ffffff;
  border-radius: 20px;
  border: solid 2px #a8a8fb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 180px;
    height: 110px;
    border-radius: 16px;
  }
}

.boxStatusTasks:hover {
  transform: scale(1.1);
}

.box {
  width: 180px;
  height: 140px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #b0b0b0;

  @media (max-width: 768px) {
    width: 90px;
    height: 110px;
    border-radius: 16px;
  }
}

.imgStatus {
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
}

.textStatus {
  margin: 2px 0 0 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.numberStatus {
  margin: 2px 0 0 0;
  font-size: 18px;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}
</style>
../store/modules/modules/boxStatusStore
