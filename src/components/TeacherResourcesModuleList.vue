<template>
  <BContainer class="my-5">
    <BRow>
      <BCol cols="12" xl="10" xxl="8">
        <div class="module-list-intro">
          <p>Dear Educator,</p>
          <p>
            Welcome to the Spectrum Lab! Whether you teach Earth Science, Physics, Chemistry,
            Astronomy, or Biology - you probably spend some of your class time helping students
            understand light, color, and the electromagnetic spectrum.
          </p>
          <p>
            Spectrum Lab consists of 5 modules and 3 suggested Final Projects where students can
            apply these concepts to real-world phenomena by immersing them in spectroscopy - the
            universal analytical tool of science (and art, as students discover in the Museum
            Conservation final project). Educators can select the Spectrum Lab modules that best
            suit their classes.
          </p>
          <ul class="list-unstyled">
            <ResourceItem
              href="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab%20Curriculum%20Overview.pdf"
              always-allowed
              >Curriculum Overview</ResourceItem
            >
            <ResourceItem
              href="https://datalabs.cfa.harvard.edu/large_files/Speclab/How%20to%20use%20the%20Spectrum%20Lab.pdf"
              always-allowed
              >How to use the Spectrum Lab</ResourceItem
            >
          </ul>
        </div>
        <ModuleRow
          title="1. Light"
          :icon-source="lightIcon"
          icon-alt="Lightbulb icon"
          :href="`${SPECLAB_URL}/light`"
          tagline="How does the interaction of light and matter affect the colors we see?"
          default-open
        >
          Students make predictions as they explore light and color with hands-on materials
          including colored filters, and with the PhET color vision simulation. The Photon Model is
          introduced to explain emission, reflection, absorption, transmission. Students are asked
          to make sense of phenomena they observe with the colored filters using these concepts.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/14N4v2-SpHKoffbHwUIwHWJkZ50xPdV019D2BObWWBr8/view"
              notebook="https://docs.google.com/document/d/1V2VWiEBpkkbPLmYkpyVWORhxNeYpCeI1Kxbont7jO14/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module1Light_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/Spectrum%20Lab%20Module%201%20Light%20Student%20Notebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module1Light_TeacherAnswerKey.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="2. Spectra"
          :icon-source="spectraIcon"
          icon-alt="Graph icon"
          :href="`${SPECLAB_URL}/spectra`"
          tagline="How can a spectrum tell us more than our eyes can perceive?"
        >
          Students make their own spectroscopes using diffraction gratings and paper towel tubes,
          and are introduced to the online Spectrum Lab visualization tool to explore how spectrum
          graphs relate to what they see through their spectroscopes. The session focuses mostly on
          learning and practicing how to interpret spectrum graphical plot representations and how
          they relate to measured quantities such as wavelength, energy, and brightness.

          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/1DW3EcmL-J2RuAvZ8YX36tsdHBkpMZv3HZri76G-ECV8/view"
              notebook="https://docs.google.com/document/d/1wzGrfWx1RAAyOBh7t2GB8DB2q1QNCXPGEjslzkvLEug/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module2Spectra_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module2Spectra_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module2Spectra_TeacherAnswer%20Key.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="3. Color"
          :icon-source="colorIcon"
          icon-alt="Paint swatches icon"
          :href="`${SPECLAB_URL}/color`"
          tagline="How can spectra tell us what color things are?"
        >
          Human eyes (and brains) perceive an object to be a certain color based on the specific
          combination of visible wavelengths and energies that the object emits, reflects, absorbs,
          and transmits. A spectrum can tell you whether that banana is yellow because it only
          reflects yellow light, or because it reflects a combination of green and red light.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/1wlN0LJuTiKqxVLUaThBespkIwTal4-B_Y3YA9nhKGGc/view"
              notebook="https://docs.google.com/document/d/1PJrFalUPaWby4VCNTRhGNRKSef6UbluobbZ9L8uJyH4/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module3Color_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module3Color_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module3Color_TeacherAnswerKey.pdf"
            >
              <ResourceSubList header="Extras">
                <ResourceItem :click-handler="handleVideoVisibleClick">
                  Teacher Demo: Visible, Infrared, and Ultraviolet
                  <template #description>
                    Physics and Astronomy teacher, Jim Kernohan, demonstrates how a tungsten light
                    blub filament's temperature determines the spectrum of the light it produces. He
                    goes on to demo quick ways of detecting infrared and ultraviolet light.<br />
                    Running time: 3:21
                  </template>
                </ResourceItem>
                <ResourceItem :click-handler="handleVideoLEDClick">
                  Teacher Demo: LED Tower
                  <template #description>
                    Continuing the previous demonstration, Jim Kernohan shows the spectra of
                    different led sources and has a quick demo to reveal how the colors on the
                    screen on a smart phone are made of just three primary colors: red, green, and
                    blue.<br />
                    Running time: 0:57
                  </template>
                </ResourceItem>
              </ResourceSubList>
            </ResourceList>
          </template>
        </ModuleRow>
        <ModuleRow
          title="4. Temperature"
          :icon-source="temperatureIcon"
          icon-alt="Thermometer icon"
          :href="`${SPECLAB_URL}/temperature`"
          tagline="What can spectra tell us about an object’s temperature?"
        >
          Students explore the features of thermal emission spectra - both theoretical models
          (so-called blackbody radiation curves), and actual spectra coming from stars of different
          temperature, from light bulbs, and the infrared emission spectra of the Earth as acquired
          from a space telescope.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/17jq6UeTdkYaXDsnc4bIPa_ONVq6Zlp3oUuawZ0M8BfI/view"
              notebook="https://docs.google.com/document/d/15ANiFIT0n7nE0mgC0Ez_vRfdM2FnMIHFJPk30HVuUyI/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module4Temperature_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/Spectrum%20Lab%20Module%204%20Temperature%20Student%20Notebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module4Temperature_TeacherAnswerKey.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="5. Composition"
          :icon-source="compositionIcon"
          icon-alt="States of water icon"
          :href="`${SPECLAB_URL}/composition`"
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
            <ResourceList
              slides="https://docs.google.com/presentation/d/1yD89bT9-3apOBkozhDJBvwxMp6xjErqeKsADA4w6Hpc/view"
              notebook="https://docs.google.com/document/d/1c8Z9PMf9gnEbP-slthqnvAdkwF1h39K-3qvMa5pgmmk/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module5Composition_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_Module5Composition_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/Spectrum%20Lab%20Module%205%20Composition%20Answer%20Key.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="Final projects"
          :icon-source="finalProjectsIcon"
          icon-alt="Stack of papers icon"
          :href="`${SPECLAB_URL}/final-projects`"
        >
          The Spectrum Lab Module includes a choice of 3 Final Projects that serve as authentic
          performance assessments for students to synthesize and apply the concepts and skills
          learned during the unit. Each project can be completed by students using the Claim,
          Evidence, and Reasoning framework.
        </ModuleRow>
        <ModuleRow
          title="Fish tank"
          :icon-source="fishtankIcon"
          icon-alt="Fish, plant icon"
          :href="`${SPECLAB_URL}/final-projects/fishtank`"
          indent
        >
          Students synthesize information about the reflection spectra of colorful fish; the
          lighting needs of chlorophyll-containing algae and coral; and the emission spectra of fish
          tank LEDs. Their task: Design a healthy and eye-pleasing aquarium, choosing a lighting
          scheme and using spectral data to explain their choices.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/14jkIbS4nb36aBM5mHRIq4uX2qSfyoMA7T1_PoEaBkOs/view"
              notebook="https://docs.google.com/document/d/12xds0lAumVzMdsvFP1Okw7J9Q8QdT2Xp4fUom2MOsiI/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/FishTank_Student%20Notebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectFishtank_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/Fishtank_AnswerKey.pdf"
            >
              <ResourceSubList header="Extras">
                <ResourceItem
                  href="https://datalabs.cfa.harvard.edu/large_files/Speclab/FishTank_DataSheetpdf.pdf"
                  >Fish Tank Data Table (PDF)</ResourceItem
                >
              </ResourceSubList>
            </ResourceList>
          </template>
        </ModuleRow>
        <ModuleRow
          title="Exoplanets"
          :icon-source="exoplanetsIcon"
          icon-alt="Exoplanet and star icon"
          :href="`${SPECLAB_URL}/final-projects/exoplanets`"
          indent
        >
          Students analyze published low-resolution spectra of real exoplanets and compare them to
          hi-res solar system and theoretical model spectra to determine the atmospheric composition
          of alien worlds trillions of miles away. Their task: Create a winning proposal for the
          IR-observing James Webb Space Telescope to obtain spectra from an exoplanet target of
          their choice.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/1FAUQUF2elO1s6IuULE8T99jA-AiEZ5fh8b7a_Jd5i9I/view"
              notebook="https://docs.google.com/document/d/1hCfgJeXMIBvxMLDQ4O6eRGxbLGe079UUvVeXGgPzegE/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectExoplanet_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectExoplanet_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectExoplanet_AnswerKey.pdf"
            />
          </template>
        </ModuleRow>
        <ModuleRow
          title="Museum conservation"
          :icon-source="museumIcon"
          icon-alt="Painting and paintbrush icon"
          :href="`${SPECLAB_URL}/final-projects/museum`"
          indent
        >
          Students investigate how paint pigments reflect light at different wavelengths and learn
          how museum conservators use spectroscopy to identify materials and make decisions about
          how to best care for and restore the artwork. Their task: Create a museum display that
          conveys how spectra are used in art conservation.
          <template #resource-list>
            <ResourceList
              slides="https://docs.google.com/presentation/d/1uneBcmk-ctCXabkOX5WJkD1tA5psJcM8K1w7kfabPy8/view"
              notebook="https://docs.google.com/document/d/1asO6xeo6dlZVfJ-g0BIbe7HnzfKtuWDktwOD1OFPMKo/copy"
              notebook-pdf="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectMuseum_StudentNotebook.pdf"
              notebook-word="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectMuseum_StudentNotebook.docx"
              answers="https://datalabs.cfa.harvard.edu/large_files/Speclab/SpectrumLab_FinalProjectMuseum_AnswerKey.pdf"
            >
              <ResourceSubList header="Extras">
                <ResourceItem
                  href="https://datalabs.cfa.harvard.edu/large_files/Speclab/MuseumConservationPigmentsDataTable.pdf"
                  >Pigment Data Table (PDF)</ResourceItem
                >
                <ResourceItem
                  href="https://datalabs.cfa.harvard.edu/large_files/Speclab/Museum%20Technique%20Descriptions.pdf"
                  >Technique Descriptions (PDF)</ResourceItem
                >
              </ResourceSubList>
            </ResourceList>
          </template>
        </ModuleRow>
        <ModuleRow
          title="Playground"
          :icon-source="playgroundIcon"
          icon-alt="Viewing and drawing graphs icon"
          :href="`${SPECLAB_URL}/playground`"
        >
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
import exoplanetsIcon from '@/assets/SVG/modelTransit1.svg?set-current-color';
import museumIcon from '@/assets/SVG/museum_conservation_icon.svg?set-current-color';
import playgroundIcon from '@/assets/SVG/playground_icon.svg?set-current-color';
import { SPECLAB_URL } from '@/constants';
import { useModalsStore } from '@/store/modals';

const modalsStore = useModalsStore();

const handleVideoVisibleClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showVideoVisibleInfraredUltra = true;
};

const handleVideoLEDClick = (e: MouseEvent) => {
  e.preventDefault();
  modalsStore.showVideoLEDTower = true;
};
</script>

<style>
.module-list-intro {
  margin-bottom: 3rem;
}
</style>
