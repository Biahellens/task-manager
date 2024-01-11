<template>
  <div class="main">
    <div class="navBarContent">
      <NavBar />
    </div>
    <div class="content">
      <div class="topContent">
        <div class="boxsContent">
          <BoxNewTask />
          <BoxStatusTasks />
        </div>
      </div>
      <div class="tableContent">
        <TableTask />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// eslint-disable-next-line import/no-unresolved
import TableTask from '../components/TableTask.vue';
import NavBar from '../components/VerticalBar.vue';
import BoxNewTask from '../components/BoxNewTask.vue';
import BoxStatusTasks from '../components/BoxStatusTasks.vue';

@Options({
  components: {
    TableTask,
    NavBar,
    BoxNewTask,
    BoxStatusTasks,
  },
})
export default class Tasks extends Vue {}
</script>

<style scoped>
  .main {
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-flow: column;
    }
  }

  .navBarContent {
    width: 20%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .content {
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .tableContent {
    display: flex;
    justify-content: center;
  }

  .topContent {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .boxsContent {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;

    @media (max-width: 768px) {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
  }

</style>
