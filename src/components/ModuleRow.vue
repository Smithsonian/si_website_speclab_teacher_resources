<template>
  <div class="module-row" :class="{ 'module-row-indented': indent }">
    <div class="module-row-left-column">
      <FontAwesomeIcon
        v-if="$slots['resource-list']"
        class="d-block mx-auto mb-3 module-row-chevron"
        :icon="['fas', 'chevron-up']"
        size="xl"
        :flip="isExpanded ? 'vertical' : undefined"
        @click="toggleExpanded"
      />
      <div class="module-row-icon-container">
        <SvgImage :src="iconSource" class="module-row-icon" />
      </div>
    </div>
    <div>
      <h2 class="h5 text-uppercase text-primary">
        <BLink v-if="href" :href="href" class="text-decoration-none">{{ title }}</BLink>
        <template v-else>{{ title }}</template>
      </h2>
      <p>
        <strong
          ><em>{{ tagline }}</em></strong
        >
        <slot></slot>
      </p>
      <ul v-if="$slots['resource-list']" v-show="isExpanded" class="list-unstyled">
        <slot name="resource-list"></slot>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';
import { computed, ref } from 'vue';

defineProps<{
  iconSource: string;
  iconAlt: string;
  title: string;
  href?: string;
  tagline?: string;
  indent?: boolean;
}>();

const isExpanded = ref(false);

const expand = () => {
  isExpanded.value = true;
};

const collapse = () => {
  isExpanded.value = false;
};

const toggleExpanded = computed(() => {
  if (isExpanded.value) {
    return collapse;
  } else {
    return expand;
  }
});
</script>

<style>
.module-row {
  padding-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
}

.module-row-chevron {
  cursor: pointer;
}

.module-row-indented {
  margin-left: 100px;
}

.module-row:not(:first-child) {
  border-top: 1px solid var(--slr-dark-brown);
}

.module-row-left-column {
  color: var(--slr-dark-grey);
}

.module-row-icon-container {
  height: 50px;
  width: 145px;
  color: var(--slr-dark-grey);
}
</style>
