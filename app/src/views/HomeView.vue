<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div class="mainHome">
    <div class="textHome">
      <h1 class="titleHome">TASK-MANAGER</h1>
      <p class="subtitleHome">A sua ferramenta de tarefas</p>
      <div class="buttonStart-Content">
        <router-link to="/createdAccount">
          <button
            class="buttonStart"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            Iniciar
          </button>
        </router-link>
      </div>
    </div>
    <div class="imgHome-content">
      <img class="imgHome" alt="home-img" src="../assets/home-img.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { pinia } from '../store/index';
// eslint-disable-next-line import/extensions
import { useHomeStore } from '../store/modules/homeStore';

export default class HomeView extends Vue {
  private pinia = pinia;

  private homeStore = useHomeStore();

  private get hover() {
    return this.homeStore.hover;
  }
}
</script>

<style scoped>
  .mainHome{
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
    padding-top: 70px;

    @media (max-width: 768px) {
      flex-flow: column;
      justify-content: center;
    }
  }

  .textHome {
    width: 40%;
    height: auto;
    display: flex;
    flex-flow: column;
    text-align: start;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .imgHome-content {
    width: 60%;
    height: auto;
    display: flex;

    @media (max-width: 768px) {
      width: 100%;
    }

  }

  .imgHome {
    width: 100%;
    height: 100%;
  }

  .titleHome {
    color: #94B1EB;
    margin: 0;
    padding: 0;
    width: 80%
  }

  .subtitleHome {
    color: #7C7C7C;
    margin: 0;
    padding: 0;
    font-size: 28px;
    width: 80%
  }

  .buttonStart-Content {
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: 8px;
  }

  .buttonStart {
    width: 120px;
    height: 30px;
    background-color: #A8A8FB;
    color: #FFFFFF;
    font-size: 16px;
    border: 2px solid #A8A8FB;
    border-radius: 16px;
    cursor: pointer
  }

  .buttonStart:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>
