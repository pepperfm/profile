<script setup lang="ts">
</script>

<template>
  <USeparator class="h-px" />

  <UFooter :ui="{ top: 'border-b border-(--ui-border)' }">
    <template #left>
      <p class="text-sm text-(--ui-text-muted)">
        Copyright © {{ new Date().getFullYear() }}.
      </p>
    </template>
  </UFooter>
</template>
