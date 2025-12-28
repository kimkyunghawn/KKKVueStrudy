

<template>

  <ul class="link_list">
    <li>
      <RouterLink to="/JsStudy/Chkbox">checkbox 모음</RouterLink>
    </li>
    <li>
      <RouterLink to="/JsStudy/Rbox">radio 모음</RouterLink>
    </li>
  </ul>


  <div class="d">
    {{ test.name }}
    {{ test.job }}
    {{ test.home }}
  </div>

  <div class="dom">
    {{ test.name }} {{ test.job }} {{ test.home }}
  </div>

  <hr>

  <Checkbox inputName="test" inputId="ch1" label="label" />

  <hr>

  <Radio rName="r1" rId="id" label="radio" />


  <RouterView />



</template>

<style scoped>

  .link_list {
    
  }

</style>

<script setup lang="ts">

  import Checkbox from "@/cps/checkbox.vue";
  import Radio from "@/cps/radio.vue";

  let test = {
    name: '김재섭',
    job: '퍼블',
    home: '없음'
  }

</script>