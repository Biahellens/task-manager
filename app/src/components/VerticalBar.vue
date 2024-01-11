<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <div class="navbar">
    <div class="logoItems">
      <img class="logoImg" alt="logo" src="../assets/logo.svg" />
      <h3>Task-manager</h3>
    </div>
    <div class="logoutItems" @mouseover="hover = true" @mouseleave="hover = false">
      <button class="buttonLogout" @click="logout">Sair da conta</button>
      <img class="logout" alt="logout" src="../assets/logout.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { useVerticalBarStore } from '../store/modules/verticalBarStore';

export default class verticalBar extends Vue {
  private verticalBarStore = useVerticalBarStore();

  private get hover() {
    return this.verticalBarStore.hover;
  }

  private set hover(value: boolean) {
    this.verticalBarStore.hover = value;
  }

  private logout() {
    this.verticalBarStore.logout(this.$router);
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: #f0f0f0;
  color: #4b0082;

  @media (max-width: 768px) {
    height: 80px;
    flex-wrap: nowrap;
  }
}

.logoItems {
  width: 100%;
  height: 30px;
  padding: 8px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }
}

.logoImg {
  width: 30px;
  height: 30px;
}

h3 {
  text-align: center;
  margin: 0;
}

.logoutItems {
  width: 100%;
  height: 30px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (max-width: 768px) {
    width: 50%;
    padding-top: 16px;
    justify-content: end;
  }
}

p {
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px 0 0;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
}

.logout {
  width: 20px;
  height: 20px;
}

.buttonLogout {
  background-color: transparent;
  border: none;
  color: #4b0082;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.logoutItems:hover {
  transform: scale(1.1);
}
</style>
../store/modules/modules/verticalBarStore
