<template>
	<h2 class="guide_title">
		여기는 Accordion 페이지
	</h2>

	<Accordion v-model="isAccordionOpen1">
		<template v-slot:title>
			타이틀
		</template>
		<template #content>
			<ul class="m_list">
				<li>내용 1</li>
				<li>내용 2</li>
				<li>내용 3</li>
			</ul>
		</template>
	</Accordion>

	<Accordion v-model="isAccordionOpen2">
		<template v-slot:title>
			타이틀
		</template>
		<template #content>
			<ul class="m_list">
				<li>내용 1</li>
				<li>내용 2</li>
				<li>내용 3</li>
			</ul>
		</template>
	</Accordion>

	

</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Accordion from '@/cps/accordion/Accordion.vue';

	const isAccordionOpen1 = ref(true) // ← 여기서 제어
	const isAccordionOpen2 = ref(false) // ← 여기서 제어


</script>


<style lang="scss">

	
</style>