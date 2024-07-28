<script setup lang="ts">
import SocialsSection from '~/components/socials/SocialsSection.vue'

defineOgImageScreenshot()
definePageMeta({
  title: 'About',
})
const techs = [
  {
    name: 'logos:php',
    title: 'PHP',
    link: 'https://php.net/',
  },
  {
    name: 'logos:laravel',
    title: 'Laravel',
    link: 'https://laravel.com/',
  },
  {
    name: 'logos:docker-icon',
    title: 'Docker',
    link: 'https://www.docker.com/',
  },
  {
    name: 'logos:phpstorm',
    title: 'PhpStorm',
    link: 'https://www.jetbrains.com/phpstorm/',
  },
  // {
  //   name: 'Oauth',
  //   title: 'OAuth',
  //   link: 'https://oauth.net/',
  // },
  {
    name: 'logos:oauth',
    title: 'OAuth',
    link: 'https://oauth.net/',
  },
  {
    name: 'Nova',
    title: 'Laravel Nova',
    link: 'https://nova.laravel.com/',
  },
  {
    name: 'logos:vue',
    title: 'Vue.js',
    link: 'https://vuejs.org/',
  },
  {
    name: 'logos:mysql',
    title: 'MySql',
    link: 'https://www.mysql.com/',
  },
  {
    name: 'logos:postgresql',
    title: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'logos:swagger',
    title: 'Swagger',
    link: 'https://swagger.io/',
  },
  {
    name: 'logos:redis',
    title: 'Redis',
    link: 'https://redis.io/',
  },
  {
    name: 'logos:sentry-icon',
    title: 'Sentry',
    link: 'https://sentry.io/',
  },
]
const jobs = [
  {
    title: 'GoStore',
    company: 'GoStore',
    link: 'https://go-store.space/',
    svg: 'logos:telegram',
    heading: 'Owner | Telegram e-commerce constructor',
    description: 'Fast and easy way to create a Web-view in TG mini-app for your business. The bot is created in a few clicks, and you can start selling your products.',
  },
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
const packages = [
  {
    title: 'api-responder-for-laravel',
    company: 'API responder',
    to: 'https://github.com/pepperfm/api-responder-for-laravel',
    icon: 'Api',
    description: 'Api responder for Laravel',
  },
  {
    title: 'filament-json',
    company: 'Simpatio',
    to: 'https://github.com/pepperfm/filament-json',
    icon: 'JsonColumn',
    description: 'Filament plugin for processing JSON field',
  },
  {
    title: 'moonshine',
    company: 'Moonshine',
    to: 'https://github.com/moonshine-software/moonshine',
    icon: 'Moonshine',
    description: 'Administration panel for Laravel framework',
  },
]
</script>

<template>
  <UContainer>
    <ULandingSection
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
    </ULandingSection>

    <ULandingSection
      title="Developing Accessible Applications with Modern Tech"
      description="As a backend developer, I use the latest technologies to create clean and test-covered application code. I make sure that the best code is code that is easy to read for everyone."
      align="left"
    >
      <div class="grid-cols-3 grid place-items-center gap-y-6">
        <div v-for="(item, index) in techs" :key="index">
          <UTooltip>
            <template #text>
              <span class="flex items-center gap-1">
                {{ item.title }}
                <Icon
                  class="text-blue-400"
                  name="i-formkit-linkexternal"
                />
              </span>
            </template>
            <ULink :to="item.link" target="_blank">
              <Icon :name="item.name" size="3rem" />
            </ULink>
          </UTooltip>
        </div>
      </div>
    </ULandingSection>

    <ULandingGrid>
      <ULandingCard
        v-for="(job, index) in jobs" :key="index"
        class="col-span-6 row-span-2"
        :description="job.description"
        :accordion-label="job.heading"
      >
        <template #icon>
          <div>
            <UIcon :name="job.svg" size="3rem" />
          </div>
        </template>
        <template #title>
          <NuxtLink class="hover:text-primary flex gap-1 items-center" target="_blank" :to="job.link">
            <span>{{ job.title }}</span>
            <UIcon
              class="text-xs"
              name="i-formkit-linkexternal"
            />
          </NuxtLink>
        </template>
        <template #description>
          <UAccordion :items="[{ label: job.heading, content: job.description }]" />
        </template>
      </ULandingCard>
    </ULandingGrid>

    <ULandingSection title="My packages and contributions">
      <UPageGrid>
        <UPageCard v-for="(item, index) in packages" :key="index" v-bind="item" target="_blank">
          <template #icon>
            <div>
              <UIcon :name="item.icon" mode="svg" size="3rem" />
            </div>
          </template>
          <template #description>
            <span class="line-clamp-2">{{ item.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection title="Additional info">
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
    </ULandingSection>
  </UContainer>
</template>
