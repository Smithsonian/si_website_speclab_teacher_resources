<template>
  <p>
    Please register for Data Labs as an educator. Once you register for an educator account, you’ll
    gain access to all the educational resources for Spectrum Lab as well as other Data Labs.
    <LinkButton :button-click="switchToSignupModal">Sign up here.</LinkButton>
  </p>
  <p>
    If you already have an educator account, please
    <LinkButton :button-click="switchToLoginModal">log in</LinkButton>.
  </p>
  <p>
    If you have a Group Leader account on DIY Planet Search, you have been automatically set up as a
    Data Labs educator. Please log in with your DIY email and password.
  </p>
  <p>We’re looking forward to supporting you and your students on your educational journey!</p>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store/modals';

const modals = useModalsStore();

const switchToSignupModal = () => {
  modals.showPleaseRegister = false;
  modals.showSignup = true;
};
const switchToLoginModal = () => {
  modals.showPleaseRegister = false;
  modals.showLogin = true;
};
</script>
