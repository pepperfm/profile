<script setup lang="ts">
import MainHeader from '~/components/layout/MainHeader.vue'
import MainFooter from '~/components/layout/MainFooter.vue'

useServerSeoMeta({
  title: 'Dmitry Gaponenko',
  ogTitle: 'Dmitry Gaponenko',
  description: 'Creating efficient, scalable web solutions that prioritize user experience',
  ogDescription: 'Creating efficient, scalable web solutions that prioritize user experience',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <MainHeader />
  <div class="min-h-[calc(100vh-60px)]">
    <NuxtPage />
  </div>
  <MainFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </MainFooter>
</template>
