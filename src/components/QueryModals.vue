<template>
  <BModal
    title="Email verification"
    id="verify-email"
    v-model="verifyEmailModal"
    lazy
    unmount-lazy
    no-footer
  >
    <VerifyEmailModalBody :verification-code="verificationCode" />
  </BModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const verifyEmailModal = ref(false);
const verificationCode = ref<string | null>(null);
const search = window.location.search;
const path = window.location.pathname;
window.history.replaceState(null, '', path);
const params = new URLSearchParams(search);
verificationCode.value = params.get('verificationCode');
if (verificationCode.value) {
  verifyEmailModal.value = true;
}
</script>
