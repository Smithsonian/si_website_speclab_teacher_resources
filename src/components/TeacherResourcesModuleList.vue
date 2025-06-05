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
          tagline="How can a spectrum tell us more than our eyes can perceive?"
        >
          Students make their own spectroscopes using diffraction gratings and paper towel tubes,
          and are introduced to the online Spectrum Lab visualization tool to explore how spectrum
          graphs relate to what they see through their spectroscopes. The session focuses mostly on
          learning and practicing how to interpret spectrum graphical plot representations and how
          they relate to measured quantities such as wavelength, energy, and brightness.

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
          tagline="How can spectra tell us what color things are?"
        >
          Human eyes (and brains) perceive an object to be a certain color based on the specific
          combination of visible wavelengths and energies that the object emits, reflects, absorbs,
          and transmits. A spectrum can tell you whether that banana is yellow because it only
          reflects yellow light, or because it reflects a combination of green and red light.
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
          tagline="What can spectra tell us about an object’s temperature?"
        >
          Students explore the features of thermal emission spectra - both theoretical models
          (so-called blackbody radiation curves), and actual spectra coming from stars of different
          temperature, from light bulbs, and the infrared emission spectra of the Earth as acquired
          from a space telescope.
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
          tagline="How can spectra tell us what things are made of?"
        >
          Students examine real emission and absorption line spectra of different gases and are
          introduced to the Bohr model of quantized atomic energy levels as a way to make sense of
          how these kinds of spectra can be used to identify particular atoms. This module ends with
          an activity in which students can explore real spectral data (reflection, emission, and
          atmospheric transmission spectra) from multiple solar system planets and practice
          interpreting what these spectra tell them about the color, temperature, and atmospheric
          composition of these planets.
          <template #resource-list>
            <ResourceItem>Teacher Guide</ResourceItem>
            <ResourceItem>Classroom Slides</ResourceItem>
            <ResourceItem>Student Notebook Worksheets</ResourceItem>
            <ResourceItem>Student Notebook Answer Keys</ResourceItem>
          </template>
        </ModuleRow>
        <ModuleRow
          title="Final projects"
          :icon-source="finalProjectsIcon"
          icon-alt="Final projects icon"
        >
          The Spectrum Lab Module includes a choice of 3 Final Projects that serve as authentic
          performance assessments for students to synthesize and apply the concepts and skills
          learned during the unit. Each project can be completed by students using the Claim,
          Evidence, and Reasoning framework.
        </ModuleRow>
        <ModuleRow title="Fishtank" :icon-source="fishtankIcon" icon-alt="Fishtank project icon">
          Students synthesize information about the reflection spectra of colorful fish; the
          lighting needs of chlorophyll-containing algae and coral; and the emission spectra of fish
          tank LEDs. Their task: Design a healthy and eye-pleasing aquarium, choosing a lighting
          scheme and using spectral data to explain their choices.
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
          icon-alt="Exoplanets project icon"
        >
          Students analyze published low-resolution spectra of real exoplanets and compare them to
          hi-res solar system and theoretical model spectra to determine the atmospheric composition
          of alien worlds trillions of miles away. Their task: Create a winning proposal for the
          IR-observing James Webb Space Telescope to obtain spectra from an exoplanet target of
          their choice.
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
          icon-alt="Museum conservation project icon"
        >
          Students investigate how paint pigments reflect light at different wavelengths and learn
          how museum conservators use spectroscopy to identify materials and make decisions about
          how to best care for and restore the artwork. Their task: Create a museum display that
          conveys how spectra are used in art conservation.
          <template #resource-list>
            <ResourceItem>Teacher Guide</ResourceItem>
            <ResourceItem>Classroom Slides</ResourceItem>
            <ResourceItem>Student Notebook Worksheets</ResourceItem>
            <ResourceItem>Student Notebook Answer Keys</ResourceItem>
          </template>
        </ModuleRow>
        <ModuleRow title="Playground" :icon-source="playgroundIcon" icon-alt="Playground icon">
          This feature of the Spectrum Lab allows teachers and students to flexibly access, analyze,
          and compare data from a curated database of over 100 spectra in multiple categories
          (Stars, Planets, Lamps, Nature, Atoms & Molecules, Thermal Emission). It also features the
          capability to upload new data, allowing teachers to design their own projects, and
          students to investigate questions of personal interest.
        </ModuleRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import lightIcon from '@/assets/SVG/lightbulb-regular.svg?set-current-color';
import spectraIcon from '@/assets/SVG/spectra_icon.svg?set-current-color';
import colorIcon from '@/assets/SVG/color_icon.svg?set-current-color';
import temperatureIcon from '@/assets/SVG/temperature_icon.svg?set-current-color';
import compositionIcon from '@/assets/SVG/composition_icon.svg?set-current-color';
import finalProjectsIcon from '@/assets/SVG/final_projects_icon.svg?set-current-color';
import fishtankIcon from '@/assets/SVG/fish_tank_icon.svg?set-current-color';
import exoplanetsIcon from '@/assets/SVG/exoplanets_icon.svg?set-current-color';
import museumIcon from '@/assets/SVG/museum_conservation_icon.svg?set-current-color';
import playgroundIcon from '@/assets/SVG/playground_icon.svg?set-current-color';
</script>
