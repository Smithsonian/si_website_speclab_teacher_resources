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
        <ModuleRow
          title="2. Spectra"
          :icon-source="spectraIcon"
          icon-alt="Spectra module icon"
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
        <ModuleRow
          title="3. Color"
          :icon-source="colorIcon"
          icon-alt="Color module icon"
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
        <ModuleRow
          title="4. Temperature"
          :icon-source="temperatureIcon"
          icon-alt="Temperature module icon"
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
        <ModuleRow
          title="5. Composition"
          :icon-source="compositionIcon"
          icon-alt="Composition module icon"
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
        <ModuleRow
          title="Fishtank"
          :icon-source="fishtankIcon"
          icon-alt="Fishtank module icon"
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
        <ModuleRow
          title="Exoplanets"
          :icon-source="exoplanetsIcon"
          icon-alt="Exoplanets module icon"
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
        <ModuleRow
          title="Museum conservation"
          :icon-source="museumIcon"
          icon-alt="Museum conservation module icon"
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
        <ModuleRow
          title="Playground"
          :icon-source="playgroundIcon"
          icon-alt="Playground icon"
          tagline="How does the interaction of light and matter affect the colors we see?"
        >
          Students make predictions as they explore light and color with hands-on materials
          including colored filters, and with the PhET color vision simulation. The Photon Model is
          introduced to explain emission, reflection, absorption, transmission. Students are asked
          to make sense of phenomena they observe with the colored filters using these concepts.
        </ModuleRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import lightIcon from '@/assets/SVG/lightbulb-regular.svg';
import spectraIcon from '@/assets/SVG/spectra_icon.svg';
import colorIcon from '@/assets/SVG/color_icon.svg';
import temperatureIcon from '@/assets/SVG/temperature_icon.svg';
import compositionIcon from '@/assets/SVG/composition_icon.svg';
import fishtankIcon from '@/assets/SVG/fish_tank_icon.svg';
import exoplanetsIcon from '@/assets/SVG/exoplanets_icon.svg';
import museumIcon from '@/assets/SVG/museum_conservation_icon.svg';
import playgroundIcon from '@/assets/SVG/playground_icon.svg';
</script>
