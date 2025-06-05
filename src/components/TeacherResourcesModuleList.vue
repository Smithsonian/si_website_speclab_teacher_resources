<template>
  <BContainer class="mt-5">
    <BRow>
      <BCol cols="12" xl="10" xxl="8">
        <ModuleRow
          title="1. Light"
          :icon-source="lightIcon"
          icon-alt="Light module icon"
          tagline="How does the interaction of light and matter affect the colors we see?"
        >
          Students make predictions as they explore light and color with hands-on materials
          including colored filters, and with the PhET color vision simulation. The Photon Model is
          introduced to explain emission, reflection, absorption, transmission. Students are asked
          to make sense of phenomena they observe with the colored filters using these concepts.
          <template #resource-list>
            <ResourceItem>Teacher Guide</ResourceItem>
            <ResourceItem>Classroom Slides</ResourceItem>
            <ResourceItem>Student Notebook Worksheets</ResourceItem>
            <ResourceItem>Student Notebook Answer Keys</ResourceItem>
          </template>
        </ModuleRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import lightIcon from '@/assets/SVG/lightbulb-regular.svg';
</script>
