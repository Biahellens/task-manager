<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="createdAccountContent">
    <div class="imgContent-createdAccount">
      <img class="img-createdAccount" alt="meeting-img" src="../assets/meeting-img.svg" />
    </div>
    <div class="textContent-createdAccount">
      <div class="align-TextContent">
        <h1 class="title-page">Criar uma Conta</h1>
        <router-link class="linkTo" to="/login">Possuo uma conta</router-link>
        <form class="formContent" @submit.prevent="login">
          <input
            v-model="email"
            class="inputcreatedAccount"
            type="email"
            id="email-createdAccount"
            placeholder="Digite seu melhor e-mail"
          />
          <input
            v-model="password"
            class="inputcreatedAccount"
            type="password"
            id="password-createdAccount"
            placeholder="Digite uma senha"
          />
        </form>
        <transition name="fade">
          <div v-if="showErrorMessageCreatedAccount" class="errorNotification">
            {{ showErrorMessageCreatedAccount }}
          </div>
        </transition>
        <div class="button-createdAccountContent">
          <button
            class="button-createdAccount"
            type="submit"
            @click="createdAccount"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// eslint-disable-next-line import/extensions
import { pinia } from '../store/index';
// eslint-disable-next-line import/extensions
import { useAuthStore } from '../store/modules/auth';

export default class createdAccountView extends Vue {
  private pinia = pinia;

  private authStore = useAuthStore();

  private get hover() {
    return this.authStore.hover;
  }

  private get email() {
    return this.authStore.email;
  }

  private set email(value: string) {
    this.authStore.email = value;
  }

  private get password() {
    return this.authStore.password;
  }

  private set password(value: string) {
    this.authStore.password = value;
  }

  private createdAccount() {
    this.authStore.createdAccount(this.$router);
  }
}
</script>

<style scoped>
.createdAccountContent {
  width: 100%;
  height: auto;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.imgContent-createdAccount {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a8a8fb;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background-color: transparent;
  }
}

.img-createdAccount {
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    width: 60%;
  }
}

.textContent-createdAccount {
  width: 50%;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.align-TextContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    align-items: start;
    align-content: start;
  }
}

.formContent {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.inputcreatedAccount {
  width: 420px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #ffffff;
  border: 2px solid #4b0082;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 12px;

  @media (max-width: 768px) {
    width: 320px;
  }

  &:focus {
    border-color: #6d6dff;
    outline: none;
    box-shadow: 0 0 5px rgba(109, 109, 255, 0.5);
  }
}

.title-page {
  margin: 0;
  padding: 0;
  color: #6d6dff;
}

.button-createdAccountContent {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-createdAccount {
  width: 140px;
  height: 40px;
  background-color: #a8a8fb;
  color: #ffffff;
  font-size: 16px;
  border: 2px solid #a8a8fb;
  border-radius: 16px;
  cursor: pointer;
}

.button-createdAccount:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.linkTo {
  text-decoration: none;
  font-size: 12px;
  width: 100%;
}

.errorNotification {
  color: #fff;
  background-color: #ff4c4c;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
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
</style>
../store/modules/auth ../store/modules/modules/auth
