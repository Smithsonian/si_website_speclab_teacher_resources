<template>
  <BForm @submit="submitLogin">
    <BFormGroup id="login-group-email" label="Email" label-for="login-email" class="mb-3">
      <BFormInput
        id="login-email"
        v-model="email"
        type="email"
        placeholder="Enter email"
        required
      />
    </BFormGroup>
    <BFormGroup id="login-group-password" label="Password" label-for="login-password" class="mb-3">
      <BFormInput
        id="login-password"
        v-model="password"
        type="password"
        placeholder="Enter password"
        required
      />
    </BFormGroup>
    <div v-if="error" class="form-error">{{ error }}</div>
    <BButton type="submit" variant="primary" :loading="loading">Log in</BButton>
  </BForm>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useModal } from 'bootstrap-vue-next';
import { ref } from 'vue';

const auth = useAuthStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const { hide } = useModal('login-modal');
const submitLogin = async (event: Event) => {
  event.preventDefault();
  try {
    loading.value = true;
    await auth.submitLogin(email.value, password.value);
    error.value = '';
    hide();
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
