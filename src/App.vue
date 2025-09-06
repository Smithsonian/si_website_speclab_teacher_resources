<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Teacher Resources | Spectrum Lab' });

configure({ tagId: 'G-B2HMDCPFNR' });
</script>

<template>
  <header>
    <TeacherResourcesNavBar />
  </header>

  <main>
    <TeacherResourcesIntro />
    <TeacherResourcesModuleList />
  </main>

  <footer>
    <TeacherResourcesFooter />
  </footer>

  <QueryModals />
</template>
