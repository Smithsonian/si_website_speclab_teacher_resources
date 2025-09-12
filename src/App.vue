<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Teacher Resources | Spectrum Lab' });

configure({ tagId: 'G-B2HMDCPFNR' });
</script>

<template>
  <BApp>
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

    <AllModals />
  </BApp>
</template>
