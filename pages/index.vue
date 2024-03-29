<script setup lang="ts">
import LandingSection from '~/components/landing/LandingSection.vue'
import SocialsSection from '~/components/socials/SocialsSection.vue'

defineOgImageScreenshot()
definePageMeta({
  title: 'About',
})
const techs = [
  {
    name: 'i-logos-php',
    title: 'PHP',
    link: 'https://php.com/',
  },
  {
    name: 'i-logos-laravel',
    title: 'Laravel',
    link: 'https://laravel.com/',
  },
  {
    name: 'i-logos-docker-icon',
    title: 'Docker',
    link: 'https://www.docker.com/',
  },
  {
    name: 'i-logos-phpstorm',
    title: 'PhpStorm',
    link: 'https://www.jetbrains.com/phpstorm/',
  },
  {
    name: 'Oauth',
    title: 'OAuth',
    link: 'https://oauth.net/',
  },
  {
    name: 'NovaSvg',
    title: 'Laravel Nova',
    link: 'https://nova.laravel.com/',
  },
  {
    name: 'i-logos-vue',
    title: 'Vue.js',
    link: 'https://vuejs.org/',
  },
  {
    name: 'i-logos-mysql',
    title: 'MySql',
    link: 'https://www.mysql.com/',
  },
  {
    name: 'i-logos-postgresql',
    title: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'i-logos-swagger',
    title: 'Swagger',
    link: 'https://swagger.io/',
  },
  {
    name: 'i-logos-redis',
    title: 'Redis',
    link: 'https://redis.io/',
  },
  {
    name: 'i-logos-sentry-icon',
    title: 'Sentry',
    link: 'https://sentry.io/',
  },
]
const jobs = [
  {
    title: 'simpatio.ru',
    company: 'Simpatio',
    link: 'https://simpatio.ru/',
    svg: 'Simpatio',
    heading: 'Maintaining current functionality and developing new features',
    description: 'Rewrote the admin panel using Vue. Refactoring + writing API for the front-end in Vue.',
  },
  {
    title: 'resanta.ru',
    company: 'Resanta',
    link: 'https://resanta.ru/',
    svg: 'Resanta',
    heading: 'Refactoring and supplementing an internal CRM admin panel',
    description: 'There are many products (drills, saws, vacuum cleaners, grinding machines...). They have categories and subcategories, they have characteristics with values. All of this is packaged into boxes, then containers and loaded onto a ship for transportation according to contracts, which are drawn up for orders from different companies. 80% of the code was written in Laravel 5.7 with a query builder (no eloquent) + without adhering to MVC.',
  },
  {
    title: 'game-insignt.ru',
    company: 'Game Insight',
    link: 'https://www.game-insight.com/en',
    svg: 'GameInsight',
    heading: 'Support and improvement of interactions between game servers/services (Helpshift, AppsFlyer, Flurry...) and internal services.',
    description: 'Collection and processing of player data for handling by support agents. Also developed and maintained an internal service storing unified information about employees: information about the employee, which services are connected to him, which accesses are granted, equipment... Laravel Nova was used, plus data loading from Jira.',
  },
  {
    title: 'rang.ai',
    company: 'Ранг',
    link: 'https://rang.ai/',
    svg: 'Rang',
    heading: 'Backend Developer',
    description: 'Developing the back-end of an application in Laravel.',
  },
  {
    title: 'qubeek.io',
    company: 'Qubeek.io',
    link: 'https://qubeek.io/',
    svg: 'Qubeek',
    heading: 'Backend Developer',
    description: 'Outsourcing-development for state-owned companies.',
  },
]
</script>

<template>
  <UContainer>
    <LandingSection
      icon="i-heroicons-rocket-launch"
      description="As a developer specializing in Laravel, I focus on creating efficient, scalable web solutions that prioritize user experience."
    >
      <template #title>
        <span
          class="text-4xl gap-2 flex flex-col font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Hello, My name is Dmitry
          <span>
            I am a Backend Developer
          </span>
        </span>
      </template>
    </LandingSection>
    <LandingSection
      title="Developing Accessible Applications with Modern Tech"
      description="As a backend developer, I use the latest technologies to create clean and test-covered application code. I make sure that the best code is code that is easy to read for everyone."
      align="left"
    >
      <div class="grid-cols-3 grid place-items-center gap-y-6">
        <div v-for="(item, index) in techs" :key="index" class="">
          <UTooltip>
            <template #text>
              <span class="flex items-center gap-1">{{ item.title }}
                <UIcon
                  class="text-blue-400"
                  name="i-formkit-linkexternal"
                />
              </span>
            </template>
            <NuxtLink external :to="item.link" target="_blank">
              <Icon :name="item.name" class="text-5xl" />
            </NuxtLink>
          </UTooltip>
        </div>
      </div>
    </LandingSection>
    <LandingGrid>
      <LandingCard
        v-for="(job, index) in jobs" :key="index"
        class="col-span-6 row-span-2"
        icon="i-heroicons-swatch"
        :description="job.description"
        :accordion-label="job.heading"
      >
        <template #icon>
          <div>
            <Icon :name="job.svg" class="text-5xl" />
          </div>
        </template>
        <template #title>
          <NuxtLink class="hover:text-primary flex gap-1 items-center" :to="job.link">
            <span>{{ job.title }}</span>
            <UIcon
              class="text-xs"
              name="i-formkit-linkexternal"
            />
          </NuxtLink>
        </template>
      </LandingCard>
    </LandingGrid>

    <LandingSection title="Additional info">
      <template #description>
        <div class="flex flex-col gap-4 items-center">
          <div class="flex items-center">
            <span>
              Currently in Russia, Belgorod
            </span>
            <UIcon class="text-primary" name="i-mdi-location" />
          </div>
          <SocialsSection />
          <div>Hobbies: music 🎸, psychology 🧠, movies 🎬, cats 🐈, coffee ☕ and memes 🗿</div>
        </div>
      </template>
    </LandingSection>
  </UContainer>
</template>
