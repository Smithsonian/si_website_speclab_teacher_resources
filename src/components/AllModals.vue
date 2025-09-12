<template>
  <BModal
    title="Email confirmation"
    id="confirm-email"
    v-model="showConfirmEmail"
    lazy
    unmount-lazy
    no-footer
  >
    <ConfirmEmailModalBody :confirmationCode="confirmationCode" />
  </BModal>
  <BModal title="Log in" id="login-modal" v-model="showLogin" lazy unmount-lazy no-footer>
    <LoginModalBody />
  </BModal>
  <BModal title="Sign up" id="signup-modal" v-model="showSignup" lazy no-footer size="xl">
    <SignupModalBody />
  </BModal>
  <BModal
    title="Sign up success"
    id="signup-success-modal"
    v-model="showSignupSuccess"
    lazy
    unmount-lazy
    no-footer
  >
    <SignupSuccessModalBody />
  </BModal>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store/modals';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const modalsStore = useModalsStore();
// Needed for BModal to work properly. Everything else should use the store directly.
const { showConfirmEmail, showLogin, showSignup, showSignupSuccess } = storeToRefs(modalsStore);

const confirmationCode = ref<string | null>(null);
const search = window.location.search;
const path = window.location.pathname;
window.history.replaceState(null, '', path);
const params = new URLSearchParams(search);
confirmationCode.value = params.get('confirmationCode');
if (confirmationCode.value) {
  modalsStore.showConfirmEmail = true;
}
</script>
