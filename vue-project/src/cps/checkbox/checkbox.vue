<template>
  <!-- <div class="chk_box"> -->
  <!-- 컴포넌트 style 호출 방법 -->
  <!-- <div :class="$style.chk_box"> -->
  <div :class="[$style.chk_box, chkwrapper]">
    <input type="checkbox" 
			:name="inputName" 
			v-bind:id="inputId"
			:checked="modelValue"
			@change="onchange"
		>
    <label :for="inputId">
      <span class="text">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  defineProps <{
		chkwrapper?: string | string[] | Record<string, boolean>,
		modelValue?: boolean,		
    inputName?: string,
    inputId?: string,
    label?: string,
  }>();

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void
	}>();

	function onchange(e: Event) {
		const target = e.target as HTMLInputElement;
		emit('update:modelValue', target.checked);
	}



</script>


<style module lang="scss">
  @use "./checkbox.module.scss"
</style>

<style lang="scss">
	body {
	}
</style>

