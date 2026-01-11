<template>
  <div class="guide_title">
    checkbox event
  </div>

  <Checkbox label="누르면 인풋이 나옵니다." />

  <p class="guide_text">
    1. 체크박스 checked에 따라서 하단에 input text 컴포넌트가 노출여부 결정 <br>
    1.1 노출되는 컴포넌트는 rounter-view? 로 해야하는지 확인
    2. 노출된 input text에 문구를 입력하면 하단 p 태그에 해당 내용 노출

  </p>


</template>

<script setup lang="ts">
  import Checkbox from "@/cps/checkbox/checkbox.vue"


</script>

<style lang="scss" scoped>

</style>