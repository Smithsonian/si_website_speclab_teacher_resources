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
      <BNavItem
        v-if="!auth.username"
        @click="loginModal = !loginModal"
        variant="light"
        opacity-hover="75"
        class="text-uppercase"
      >
        Login
      </BNavItem>
      <BNavItem
        v-else
        @click="auth.submitLogout"
        variant="light"
        opacity-hover="75"
        class="text-uppercase"
      >
        Logout
      </BNavItem>
    </BNavbarNav>
    <LoginModal v-model="loginModal" />
  </BNavbar>
</template>

<script setup lang="ts">
import { SPECLAB_URL } from '@/constants';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
const loginModal = ref(false);
const auth = useAuthStore();
</script>
