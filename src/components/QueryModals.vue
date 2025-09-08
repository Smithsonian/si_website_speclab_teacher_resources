<template>
  <BModal
    title="Email confirmation"
    id="confirm-email"
    v-model="confirmEmailModal"
    lazy
    unmount-lazy
    no-footer
  >
    <ConfirmEmailModalBody :confirmationCode="confirmationCode" />
  </BModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const confirmEmailModal = ref(false);
const confirmationCode = ref<string | null>(null);
const search = window.location.search;
const path = window.location.pathname;
window.history.replaceState(null, '', path);
const params = new URLSearchParams(search);
confirmationCode.value = params.get('confirmationCode');
if (confirmationCode.value) {
  confirmEmailModal.value = true;
}
</script>
