<template>
  <div class="radio_box">
    <input type="radio" :name="rName" :id="rId">
    <label :for="rId">
      <span class="text">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  defineProps <{
    rName?: string,
    rId?: string,
    label?: string,
  }>();

</script>

<style lang="scss" scoped>

</style>

