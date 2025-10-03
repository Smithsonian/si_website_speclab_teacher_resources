<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source
        src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/kernohan_demo_spectrum_led_tower.mp4"
      />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Continuing the previous demonstration, Jim Kernohan shows the spectra of different led sources
      and has a quick demo to reveal how the colors on the screen on a smart phone are made of just
      three primary colors: red, green, and blue.
    </p>
    <p class="mb-0">Running time: 0:57</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/kernohan_demo_spectrum_led_tower_poster.jpg';
import captions from '@/assets/video_metadata/kernohan_demo_spectrum_led_tower.vtt';
</script>
