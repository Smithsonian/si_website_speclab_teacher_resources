<template>
  <div
    class="teacher-resources-intro-header-image text-light d-flex flex-column justify-content-end"
  >
    <BContainer>
      <BRow>
        <BCol cols="12" xl="10" xxl="8">
          <p class="mb-5">
            Spectrum Lab is a modular technology-enabled curriculum that, over 3-8 class periods,
            engages high school students in authentic investigations about light, color, and spectra
            using real data and online data visualization tools.
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style>
.teacher-resources-intro-header-image {
  background-image:
    linear-gradient(0deg, rgb(66 42 22 / 100%) 0%, rgb(66 42 22 / 0%) 100%),
    url(/src/assets/hand_drawing@2x.webp);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top 100% left 50%;
  min-height: 402px;
}
</style>
