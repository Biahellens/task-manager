<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="loginContent">
    <div class="imgContent-login">
      <img class="imgLogin" alt="meeting-img" src="../assets/meeting-img.svg" />
    </div>
    <div class="textContent-login">
      <div class="align-TextContent">
        <h1 class="title-page">Login</h1>
        <router-link class="linkTo" to="/createdAccount">Não possuo uma conta</router-link>
        <form class="formContent" @submit.prevent="login">
          <input
            v-model="email"
            class="inputLogin"
            type="email"
            id="email-login"
            placeholder="Digite seu e-mail"
          />
          <input
            v-model="password"
            class="inputLogin"
            type="password"
            id="password-login"
            placeholder="Digite sua senha"
          />
        </form>
        <transition name="fade">
          <div v-if="this.authStore.showErrorMessage" class="errorNotification">
            {{ this.authStore.showErrorMessage }}
          </div>
        </transition>
        <div class="button-loginContent">
          <button
            class="button-login"
            type="submit"
            @click="login"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ref } from 'vue';
// eslint-disable-next-line import/extensions
import { pinia } from '../store/index';
// eslint-disable-next-line import/extensions
import { useAuthStore } from '../store/modules/auth';

export default class loginView extends Vue {
  hover = ref(false);

  private pinia = pinia;

  private authStore = useAuthStore();

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

  private login() {
    this.authStore.login(this.$router);
  }
}
</script>

<style scoped>
.loginContent {
  width: 100%;
  height: auto;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.imgContent-login {
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

.imgLogin {
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    width: 60%;
  }
}

.textContent-login {
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

.inputLogin {
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

.button-loginContent {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-login {
  width: 140px;
  height: 40px;
  background-color: #a8a8fb;
  color: #ffffff;
  font-size: 16px;
  border: 2px solid #a8a8fb;
  border-radius: 16px;
  cursor: pointer;
}

.button-login:hover {
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
