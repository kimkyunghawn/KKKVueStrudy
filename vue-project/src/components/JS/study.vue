

<template>

  <ul class="link_list">
    <li>
      <RouterLink to="/JsStudy/Chkbox">checkbox 모음</RouterLink>
    </li>
    <li>
      <RouterLink role="button" class="x2" to="/JsStudy/Rbox">radio 모음</RouterLink>
    </li>
  </ul>

  <p>추후 router link 대체 vue 파일 / 모바일에서 웹/앱 접근성 시 a tag role button 처리를 위함</p>
  <pre>
    <template>
      <RouterLink
        :to="to"
        role="button"
        class="app-link"
      >
        <slot />
      </RouterLink>
    </template>
  </pre>


  <div class="d">
    {{ test.name }}
    {{ test.job }}
    {{ test.home }}
  </div>

  <div class="dom">
    {{ test.name }} {{ test.job }} {{ test.home }}
  </div>

  <hr>

  <Checkbox inputName="test" inputId="ch1" label="약관에 동의하시겠습니까?" />
  <Checkbox inputName="test" inputId="ch2" label="label" />
  <Checkbox inputName="test" inputId="ch3" label="label" />

  <hr>

  <Radio rName="r1" rId="id" label="radio test" />


  <RouterView />



</template>

<style scoped>

  .link_list {
    
  }

</style>

<script setup lang="ts">

  import Checkbox from "@/cps/checkbox/checkbox.vue";
  import Radio from "@/cps/radio/radio.vue";

  let test = {
    name: '김재섭',
    job: '퍼블',
    home: '없음'
  }

</script>