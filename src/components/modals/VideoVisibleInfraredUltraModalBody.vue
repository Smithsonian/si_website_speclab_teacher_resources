<template>
  <div>
    <VideoJSPlayer :other-options="{ poster }">
      <source src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/kernohan_demo_spectrum_lamp.mp4" />
      <track label="Captions" kind="captions" srclang="en" :src="captions" />
    </VideoJSPlayer>
    <p>
      Physics and Astronomy teacher, Jim Kernohan, demonstrates how a tungsten light blub filament's
      temperature determines the spectrum of the light it produces. He goes on to demo quick ways of
      detecting infrared and ultraviolet light.
    </p>
    <p class="mb-0">Running time: 3:21</p>
  </div>
</template>

<script setup lang="ts">
import poster from '@/assets/video_metadata/kernohan_demo_spectrum_lamp_poster.jpg';
import captions from '@/assets/video_metadata/kernohan_demo_spectrum_lamp.vtt';
</script>
