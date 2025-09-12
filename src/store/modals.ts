import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('modals', () => {
  const showLogin = ref(false);
  const showSignup = ref(false);
  const showSignupSuccess = ref(false);
  const showConfirmEmail = ref(false);

  const hideAllModals = () => {
    for (const modalRef of [showLogin, showSignup, showSignupSuccess, showConfirmEmail]) {
      modalRef.value = false;
    }
  };

  return { showLogin, showSignup, showSignupSuccess, showConfirmEmail, hideAllModals };
});
