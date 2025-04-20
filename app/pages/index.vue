<script setup lang="ts">
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import SocialsSection from '~/components/SocialsSection.vue'

// const breakpoints = useBreakpoints(breakpointsTailwind)
// const marqueeBreakpoints = breakpoints.greaterOrEqual('lg')

const { data: page } = await useAsyncData('home', () => {
  return queryCollection('content').first()
})

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div class="relative">
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>

    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      :ui="{ container: 'md:pt-18 lg:pt-20' }"
    >
      <template #headline>
        <UIcon name="i-heroicons-rocket-launch" size="40px" class="text-(--ui-primary)" />
      </template>
      <template #title>
        <MDC
          :value="page.hero.title"
          class="*:leading-11 sm:*:leading-19 max-w-3xl mx-auto text-5xl"
        />
      </template>
    </UPageHero>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />

    <UPageSection
      v-for="(section, index) in page.sections"
      id="about"
      :key="index"
      v-bind="section"
      orientation="horizontal"
    >
      <template #title>
        <MDC
          :value="section.title"
          class="sm:*:leading-11"
        />
      </template>
      <div class="grid-cols-3 grid place-items-center gap-y-6">
        <div v-for="(item, i) in section.techs" :key="i">
          <UTooltip>
            <template #content>
              <span>{{ item.title }}</span>
              <span class="flex items-center gap-1">
                <Icon
                  class="text-(--ui-primary)"
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
      <template #bottom>
        <UPageMarquee
          pause-on-hover
          class="pb-5"
          :overlay="false"
        >
          <UPageCard
            v-for="(testimonial, key) in page.testimonials"
            :key="key"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{
              description: 'line-clamp-3',
            }"
            class="w-35 shrink-0"
          />
        </UPageMarquee>
      </template>
    </UPageSection>

    <UPageSection
      id="experience"
      :ui="{ features: 'grid lg:grid-cols-2', title: 'text-left @container relative flex', description: 'text-left' }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
          />
        </div>
      </template>

      <template #features>
        <UPageCard
          v-for="(job, index) in page.features.features"
          :key="index"
          spotlight
          :ui="{ title: 'pt-6' }"
        >
          <template #header>
            <UIcon :name="job.icon" class="size-10" />
          </template>
          <template #title>
            <NuxtLink class="hover:text-primary flex gap-1 items-center" target="_blank" :to="job.to">
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
        </UPageCard>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />

    <UPageSection
      id="steps"
      v-bind="page.steps"
      class="relative overflow-hidden"
      :links="[
        {
          label: 'Explore more',
          trailingIcon: 'i-lucide:external-link',
          size: 'lg',
          target: '_blank',
          external: true,
          to: 'https://docs.pepperfm.com/',
        },
      ]"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
          :icon="step.icon"
          :to="step.to"
          target="_blank"
        >
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-(--ui-text-muted)">
              {{ step.description }}
            </span>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <USeparator />

    <UPageCTA
      id="socials"
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="page.cta.title" />
        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>

      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />

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

      <StarsBg />
    </UPageCTA>
  </div>
</template>
