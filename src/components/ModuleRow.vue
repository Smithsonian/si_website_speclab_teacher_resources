<template>
  <div class="module-row" :class="{ 'module-row-indented': indent }">
    <div class="module-row-icon-container">
      <SvgImage :src="iconSource" class="module-row-icon" />
    </div>
    <h2 class="h5 text-uppercase text-primary">{{ title }}</h2>
    <p>
      <strong
        ><em>{{ tagline }}</em></strong
      >
      <slot></slot>
    </p>
    <ul v-if="$slots['resource-list']" class="list-unstyled">
      <slot name="resource-list"></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';

defineProps<{
  iconSource: string;
  iconAlt: string;
  title: string;
  tagline?: string;
  indent?: boolean;
}>();
</script>

<style>
.module-row {
  padding-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 145px;
}

.module-row-indented {
  margin-left: 100px;
}

.module-row:not(:first-child) {
  border-top: 1px solid var(--slr-dark-brown);
}

.module-row-icon-container {
  height: 50px;
  width: 145px;
  position: absolute;
  left: 0px;
  color: var(--slr-dark-grey);
}
</style>
