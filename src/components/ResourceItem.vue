<template>
  <li>
    <template v-if="!href && !clickHandler">
      <slot></slot>
    </template>
    <BLink v-else-if="alwaysAllowed || auth.isEducator" :href="href" @click="clickHandler">
      <slot></slot>
    </BLink>
    <LinkButton v-else :button-click="showPleaseRegister">
      <slot></slot>
    </LinkButton>
    <ul v-if="$slots['description']">
      <li>
        <slot name="description"></slot>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';

defineProps<{
  href?: string;
  alwaysAllowed?: boolean;
  clickHandler?: (e: MouseEvent) => void;
}>();

const auth = useAuthStore();
const modals = useModalsStore();

const showPleaseRegister = () => {
  modals.showPleaseRegister = true;
};
</script>
