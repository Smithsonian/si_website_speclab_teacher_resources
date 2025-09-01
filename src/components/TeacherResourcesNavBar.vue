<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand href="https://datalabs.cfa.harvard.edu/">
      <img src="/src/assets/DataLabsLogo@2x-89.png" height="44" width="196" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <img
          class="d-inline-block align-top"
          src="/src/assets/SVG/resources_logo.svg?url"
          height="36"
          width="415"
        />
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem :href="SPECLAB_URL" variant="light" opacity-hover="75" class="text-uppercase">
        Spectrum Lab
      </BNavItem>
      <BNavText class="text-gen-grey">|</BNavText>
      <BButton
        v-if="!auth.username"
        @click="loginModal = true"
        variant="link"
        opacity-hover="75"
        class="nav-link link-light text-uppercase"
      >
        Login
      </BButton>
      <BButton
        v-else
        @click="auth.submitLogout"
        variant="link"
        opacity-hover="75"
        class="nav-link link-light text-uppercase"
      >
        Logout
      </BButton>
    </BNavbarNav>
    <BModal title="Log in" id="login-modal" v-model="loginModal" lazy unmount-lazy no-footer>
      <LoginModalBody />
    </BModal>
  </BNavbar>
</template>

<script setup lang="ts">
import { SPECLAB_URL } from '@/constants';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
const loginModal = ref(false);
const auth = useAuthStore();
</script>
