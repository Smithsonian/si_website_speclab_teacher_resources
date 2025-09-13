<template>
  <BForm @submit="submitSignup" method="post">
    <div class="mb-3">
      <label for="signup-firstname" class="form-label">First name</label>
      <BFormInput
        id="signup-firstname"
        v-model="firstName"
        type="text"
        autocomplete="given-name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-lastname" class="form-label">Last name</label>
      <BFormInput
        id="signup-lastname"
        v-model="lastName"
        type="text"
        autocomplete="family-name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-institutionname" class="form-label">Institution name</label>
      <BFormInput
        id="signup-institutionname"
        v-model="institutionName"
        type="text"
        autocomplete="organization"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-institutioncountry" class="form-label">Institution country</label>
      <BFormInput
        id="signup-institutioncountry"
        v-model="institutionCountry"
        type="text"
        autocomplete="country-name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-institutionstate" class="form-label">Institution state</label>
      <BFormInput
        id="signup-institutionstate"
        v-model="institutionState"
        type="text"
        autocomplete="address-level1"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-institutioncity" class="form-label">Institution city</label>
      <BFormInput
        id="signup-institutioncity"
        v-model="institutionCity"
        type="text"
        autocomplete="address-level2"
        required
      />
    </div>
    <div class="mb-3">
      <label for="signup-institutionzip" class="form-label">Institution zip code</label>
      <BFormInput
        id="signup-institutionzip"
        v-model="institutionZipCode"
        type="text"
        autocomplete="postal-code"
        required
      />
    </div>
    <div v-if="errorArray" class="form-error">
      <p v-for="[field, message] in errorArray" v-bind:key="field">{{ field }}: {{ message }}</p>
    </div>
    <BButton type="submit" variant="primary" :loading="loading" loading-fill>
      Request educator status
    </BButton>
  </BForm>
</template>

<script setup lang="ts">
import { LoginResult, useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';
import { fetchAndParse } from '@/utils/fetchUtils';
import { computed, ref } from 'vue';

const modals = useModalsStore();
const auth = useAuthStore();

const switchToSuccessModal = () => {
  modals.showRequestEducator = false;
  modals.showRequestEducatorSuccess = true;
};

const firstName = ref('');
const lastName = ref('');
const institutionName = ref('');
const institutionCountry = ref('');
const institutionState = ref('');
const institutionCity = ref('');
const institutionZipCode = ref('');

const error = ref('');
const loading = ref(false);
const submitSignup = async (event: Event) => {
  event.preventDefault();
  try {
    loading.value = true;
    const result = await fetchAndParse('/request-educator', 'POST', LoginResult, {
      educator: {
        firstName: firstName.value,
        lastName: lastName.value,
        institution: {
          name: institutionName.value,
          country: institutionCountry.value,
          state: institutionState.value,
          city: institutionCity.value,
          zipCode: institutionZipCode.value,
        },
      },
    });
    auth.storeResponse(result);
    if (!auth.isEducator) {
      throw new Error('Request failed. Try logging out and back in.');
    }
    error.value = '';
    switchToSuccessModal();
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = `${e}`;
    }
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const errorArray = computed((): [string, string][] => {
  if (!error.value) {
    return [];
  }
  const errorLines = error.value.split('\n');
  return errorLines.map((line, i) => {
    let [field, message] = line.split(':');
    if (!message) {
      field = `${i}`;
      message = line;
    }
    return [field, message];
  });
});
</script>
