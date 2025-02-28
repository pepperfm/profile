<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'About',
  to: '#about',
  active: activeHeadings.value.includes('experience') && !activeHeadings.value.includes('socials'),
}, {
  label: 'Experience',
  to: '#experience',
  active: activeHeadings.value.includes('experience') && !activeHeadings.value.includes('about'),
}, {
  label: 'Socials',
  to: '#socials',
  active: !activeHeadings.value.includes('about') && activeHeadings.value.includes('experience'),
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#about'),
    document.querySelector('#experience'),
    document.querySelector('#socials'),
  ])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        aria-label="logo" to="/"
        class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-center gap-1.5"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/36007880?v=4"
          alt="Dmitry Gaponenko"
        />
        <span class="hidden lg:flex">
          Dmitry Gaponenko
        </span>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>
  </UHeader>
</template>
