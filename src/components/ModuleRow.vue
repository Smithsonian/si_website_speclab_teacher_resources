<template>
  <div class="module-row">
    <img class="module-row-icon" :src="iconSource" :alt="iconAlt" />
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
defineProps<{
  iconSource: string;
  iconAlt: string;
  title: string;
  tagline?: string;
}>();
</script>

<style>
.module-row {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 145px;
}

.module-row-icon {
  width: 50px;
  position: absolute;
  left: 50px;
}
</style>
