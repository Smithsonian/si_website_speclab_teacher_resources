<template>
  <BModal v-model="model" title="Log in">
    <BForm @submit="submitLogin">
      <BFormGroup id="login-group-email" label="Email" label-for="login-email">
        <BFormInput
          id="login-email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </BFormGroup>
      <BFormGroup id="login-group-password" label="Password" label-for="login-password">
        <BFormInput
          id="login-password"
          v-model="password"
          type="password"
          placeholder="Enter password"
          required
        />
      </BFormGroup>
      <BButton type="submit" variant="primary">Log in</BButton>
    </BForm>
  </BModal>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';

const model = defineModel<boolean>();
const auth = useAuthStore();
const email = ref('');
const password = ref('');
const submitLogin = async () => {
  await auth.submitLogin(email.value, password.value);
};
</script>
