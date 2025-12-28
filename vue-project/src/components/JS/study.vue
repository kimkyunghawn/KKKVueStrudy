

<template>
  <div class="d">
    {{ test.name }}
    {{ test.job }}
    {{ test.home }}
  </div>

  <div class="dom">
    {{ test.name }} {{ test.job }} {{ test.home }}
  </div>

  <hr>

  <Checkbox name="test" inputId="ch1" label="label" />




</template>

<style scoped>

</style>

<script setup lang="ts">

  import Checkbox from "@/cps/checkbox.vue";

  let test = {
    name: '김재섭',
    job: '퍼블',
    home: '없음'
  }

</script>