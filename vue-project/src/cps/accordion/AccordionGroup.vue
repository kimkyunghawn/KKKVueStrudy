<template>
  <div class="accordion_group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const openIndex = ref<number | null>(null)
const items = ref(0)

const register = () => {
  const index = items.value
  items.value++
  return index
}

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

provide('accordionGroup', {
  openIndex,
  register,
  toggle,
})
</script>


