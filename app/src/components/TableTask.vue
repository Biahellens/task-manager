<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div class="table">
    <div class="headerBar">
      <h2>Suas Tarefas</h2>
      <button
        class="sortingButton"
        @click="toggleSortingOrder"
        type="submit"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <p>Ordernar</p>
        <img class="filterImg" alt="filter" src="../assets/filter.svg" />
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th class="large">DESCRIÇÃO</th>
          <th class="medium">STATUS</th>
          <th class="buttonsChange-content"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in sortedTasks" :key="task.id">
          <td class="large">{{ task.description }}</td>
          <td class="medium">{{ task.status === 'pending' ? 'Em Progresso' : 'Concluído' }}</td>
          <td class="buttonsChange-content">
            <button
              class="buttonsChange"
              v-if="task.status === 'pending'"
              @click="finishTask(task.id)"
            >
              <img class="buttonsChange-img" alt="check" src="../assets/check-change.svg" />
            </button>
            <button class="buttonsChange" @click="deleteTask(task.id)">
              <img class="buttonsChange-img" alt="delete" src="../assets/trash.svg" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { useTableTaskStore } from '../store/modules/tableTaskStore';

export default class tabletask extends Vue {
  private tableTaskStore = useTableTaskStore();

  private get hover() {
    return this.tableTaskStore.hover;
  }

  private set hover(value: boolean) {
    this.tableTaskStore.hover = value;
  }

  private get tasks() {
    return this.tableTaskStore.tasks;
  }

  private get sortingOrder() {
    return this.tableTaskStore.sortingOrder;
  }

  private set sortingOrder(value: 'asc' | 'desc') {
    this.tableTaskStore.sortingOrder = value;
  }

  async mounted() {
    await this.tableTaskStore.getTasks();
  }

  get sortedTasks() {
    return this.tasks.sort((a, b) => {
      if (this.sortingOrder === 'asc') {
        return a.status.localeCompare(b.status);
        // eslint-disable-next-line no-else-return
      } else {
        return b.status.localeCompare(a.status);
      }
    });
  }

  async toggleSortingOrder() {
    this.sortingOrder = this.sortingOrder === 'asc' ? 'desc' : 'asc';
  }
}
</script>

<style scoped>
.headerBar {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #7c7c7c;
}

.sortingButton {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #7c7c7c;
  text-align: center;
  cursor: pointer;
}

.sortingButton:hover {
  transform: scale(1.1);
}

.filterImg {
  width: 30px;
  height: 30px;
  margin-left: 4px;
}

.table {
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 90%;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #4b0082;
  border: none;
}

tr {
  border: solid #ddd;
  border-width: 0 0 1px 0;
  padding: 8px;
  text-align: left;
}

th {
  padding: 8px;
  text-align: left;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.buttonsChange-content {
  display: flex;
  justify-content: end;
}

td {
  padding: 8px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px;
  }
}

.large {
  width: 60%;

  @media (max-width: 768px) {
    width: 50%;
  }
}

.medium {
  width: 20%;

  @media (max-width: 768px) {
    width: 30%;
  }
}

.buttonsChange {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.buttonsChange:hover {
  transform: scale(0.8);
}

.buttonsChange-img {
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
}
</style>
../store/modules/modules/tableTaskStore
