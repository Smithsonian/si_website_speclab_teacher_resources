<template>
  <ul class="list-unstyled">
    <ResourceSubList header="Teacher Guide">
      <ResourceItem>PDF</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Classroom Slides">
      <ResourceItem :href="slides">Google slides</ResourceItem>
      <ResourceItem :href="slidesPdf">PDF</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Student Notebook Worksheets">
      <ResourceItem>Google doc</ResourceItem>
      <ResourceItem>PDF</ResourceItem>
      <ResourceItem>Word doc</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Student Notebook Answer Keys">
      <ResourceItem>PDF</ResourceItem>
    </ResourceSubList>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  teacherGuide?: string;
  slides?: string;
  slidesPdf?: string;
  notebook?: string;
  notebookPdf?: string;
  notebookWord?: string;
  answers?: string;
}>();
</script>
