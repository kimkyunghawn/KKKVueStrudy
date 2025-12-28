<template>
  <div class="chk_box">
    <input type="checkbox" :name="inputName" v-bind:id="inputId">
    <label :for="inputId">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
  defineProps <{
    inputName?: string,
    inputId?: string,
    label?: string,
  }>();

</script>

<style lang="scss" scoped>

</style>

