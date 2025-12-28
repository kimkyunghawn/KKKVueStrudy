<template>
  <!-- <div class="chk_box"> -->
  <!-- 컴포넌트 style 호출 방법 -->
  <div :class="$style.chk_box">
    <input type="checkbox" :name="inputName" v-bind:id="inputId">
    <label :for="inputId">
      <span class="text">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  defineProps <{
    inputName?: string,
    inputId?: string,
    label?: string,
  }>();

</script>


<style module lang="scss">
  @use "./checkbox.module.scss"
</style>

<style lang="scss" scoped>
</style>

