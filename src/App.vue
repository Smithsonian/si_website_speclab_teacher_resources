<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({ title: 'Teacher Resources | Spectrum Lab' });
</script>

<template>
  <header>
    <TeacherResourcesNavBar />
  </header>

  <main>
    <TeacherResourcesIntro />
  </main>
</template>
