import { API_BASE_URL } from '@/constants';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const username = ref<string | null>(null);
  const isGroupMember = ref<boolean>(false);
  const isEducator = ref<boolean>(false);

  const fetchLoggedIn = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/logged-in`);
      if (!response.ok) {
        throw new Error(`/logged-in status: ${response.status}`);
      }

      const result = await response.json();
      username.value = result.username;
      isGroupMember.value = !!result.isGroupMember;
      isEducator.value = !!result.isEducator;
    } catch (error) {
      console.error(error);
    }
  };

  const submitLogin = async (email: string, password: string) => {
    let result;
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      try {
        result = await response.json();
      } catch (e) {
        console.error(e);
      }
      if (result?.error?.description) {
        throw new Error(result.error.description);
      } else {
        throw new Error(`/login status: ${response.status}`);
      }
    }

    result = await response.json();
    username.value = result.username;
    isGroupMember.value = !!result.isGroupMember;
    isEducator.value = !!result.isEducator;
  };

  const submitLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`/logout status: ${response.status}`);
      }
      await fetchLoggedIn();
    } catch (error) {
      console.error(error);
    }
  };

  return { username, isGroupMember, isEducator, fetchLoggedIn, submitLogin, submitLogout };
});
