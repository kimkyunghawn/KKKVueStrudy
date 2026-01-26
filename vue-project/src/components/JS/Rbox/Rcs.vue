<template>
  <div class="cont_wrap">
    여기는 radio components 모음

		<div class="g_list">
			<Radio 
				v-for="item in radioData1"
				:rId="item.rId"
				:label="item.label"
				:rName="item.rName"
				v-model="item.chking"
			/>
		</div>

		<p>
			chking 의 상태값은 [ <strong class="bold">{{ chking }}</strong> ] 입니다.
		</p>

		<div class="g_list">
			<Radio 
				v-for="item in radioData2"
				:key="`${item.rName}-${item.rId}`"
				v-bind="item"
			/>
		</div>

		<div class="g_list">
			<Radio 
				v-for="item in radioData3"
				:key="item.rId"
				v-bind="item"
			/>
		</div>

		<div class="g_list">
			<Radio 
				v-for="item in radioData4.items"
				:rId="item.rId"
				:label="item.label"
				:rName="radioData4.name"
			/>
		</div>

  </div>
</template>

<script setup lang="ts">
	import Radio from "@/cps/radio/radio.vue"

	import { ref } from 'vue'

	const chking = ref();

	const radioData1 = ref([
		{ rId: 'r1', label: '라디오 1번', rName: 'radioGroup', chking: chking },
		{ rId: 'r2', label: '라디오 2번', rName: 'radioGroup', chking: chking },
		{ rId: 'r3', label: `라디오<span class="sdf">sdfds</span> 3번`, rName: 'radioGroup', chking: chking },
		{ rId: 'r4', label: '라디오 4번', rName: 'radioGroup', chking: chking },
	])

	const radioData2 = ref([
		{ rId: 'r21', label: '라디오 2 1번', rName: 'radioGroup2' },
		{ rId: 'r22', label: '라디오 2 2번', rName: 'radioGroup2' },
		{ rId: 'r23', label: '라디오 2 3번', rName: 'radioGroup2' },
		{ rId: 'r24', label: '라디오 2 4번', rName: 'radioGroup2' },
	])

	const radioData3 = ref([
		{ rId: 'r31', label: '라디오 3 1번', rName: 'radioGroup3' },
		{ rId: 'r32', label: '라디오 3 2번', rName: 'radioGroup3' },
		{ rId: 'r33', label: '라디오 3 3번', rName: 'radioGroup3' },
		{ rId: 'r34', label: '라디오 3 4번', rName: 'radioGroup3' },
	])

	const radioData4 = ref(
		{
			name: 'radioGroup4',
			items: [
				{ rId: 'r41', label: '라디오 4 1번' },
				{ rId: 'r42', label: '라디오 4 2번' },
				{ rId: 'r43', label: '라디오 4 3번' },
				{ rId: 'r44', label: '라디오 4 4번' },
			]
		},
	)

</script>

<style lang="scss" scoped>

</style>