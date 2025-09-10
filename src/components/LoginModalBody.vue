<template>
  <div>
    <BForm @submit="submitLogin" class="mb-2">
      <BFormGroup id="login-group-email" label="Email" label-for="login-email" class="mb-3">
        <BFormInput
          id="login-email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          autocomplete="username email"
          required
        />
      </BFormGroup>
      <BFormGroup
        id="login-group-password"
        label="Password"
        label-for="login-password"
        class="mb-3"
      >
        <BFormInput
          id="login-password"
          v-model="password"
          type="password"
          placeholder="Enter password"
          autocomplete="current-password"
          required
        />
      </BFormGroup>
      <div v-if="error" class="form-error">{{ error }}</div>
      <BButton type="submit" variant="primary" :loading="loading" loading-fill>Log in</BButton>
    </BForm>
    <div>
      Don't have an account?
      <BButton @click="switchToSignupModal" variant="link" class="align-baseline">Sign up</BButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useToast, useToggle } from 'bootstrap-vue-next';
import { ref } from 'vue';

const auth = useAuthStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const { hide: hideLogin } = useToggle('login-modal');
const { show: showSignup } = useToggle('signup-modal');
const switchToSignupModal = () => {
  hideLogin();
  showSignup();
};
const { create } = useToast();
const submitLogin = async (event: Event) => {
  event.preventDefault();
  try {
    loading.value = true;
    await auth.submitLogin(email.value, password.value);
    error.value = '';
    hideLogin();

    create({
      variant: 'success',
      body: 'Log in successful.',
      progressProps: {
        variant: 'success',
      },
      closeClass: 'btn-close-white',
    });
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = `${e}`;
    }
  } finally {
    loading.value = false;
  }
};
</script>
