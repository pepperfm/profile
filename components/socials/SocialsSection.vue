<template>
  <div id="contact" class="border border-primary flex p-2 rounded-2xl items-center justify-center gap-2">
    <div>Socials:</div>
    <div class="flex flex-row gap-2 text-3xl md:text-2xl">
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        target="_blank"
        to="https://www.instagram.com/pepper_fm/"
      >
        <UIcon name="i-simple-icons-instagram" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        target="_blank"
        to="https://www.linkedin.com/in/dmitry-gaponenko-849692271"
      >
        <UIcon name="i-simple-icons-linkedin" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        target="_blank"
        to="https://t.me/pepper_fm"
      >
        <UIcon name="i-simple-icons-telegram" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        target="_blank"
        to="https://github.com/pepperfm"
      >
        <UIcon name="i-simple-icons-github" />
      </NuxtLink>
    </div>
  </div>
</template>
