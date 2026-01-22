<template>

	<div class="cont_wrap">
		<div class="guide_title">
			checkbox event
		</div>
		

		<Checkbox inputId="test1" label="누르면 인풋이 나옵니다." :chkwrapper="['t1', 't2']" />
		<Checkbox inputId="test2" label="누르면 인풋이 나옵니다." v-model="chked" />
		<Checkbox inputId="test3" :label="`누르면 인풋이 나옵니다. ${chked}`" v-model="chked" />
		<Checkbox inputId="test4" :label="'누르면 인풋이 나옵니다. ' + chked" v-model="chked" />

		<p class="guide_title">
			chked가 true 면 .dom가 활성화<br>
			chked의 상태값은 [ <strong class="bold">{{ chked }}</strong> ] 입니다.
		</p>
		<br>
		<div class="test_dom test_dom_ty1" v-if="chked">
			<Input inpId="id1" maxlength="20" wrapperClass="test1" inpClass="inptest1 sdf" />
			<Input inpId="id2" :inpClass="['t1', 't2']"/>
			<Input inpId="id3" placeholder="x" :modelValue="dmpValue1" />
			<Input inpId="id4" v-model="dmpValue1" />
			<Input inpId="id4" v-model="dmpValue1" readonly />
			<Input inpId="id5" maxlength="20" :modelValue="dmpValue1" disabled readonly  />
		</div>

		<br>

		<p>
			입력된 input의 값은 동적으로 <strong class="bold">{{ dmpValue1 }}</strong> 입니다.
		</p>

	</div>


</template>

<script setup lang="ts">
  import Checkbox from "@/cps/checkbox/checkbox.vue"
	import Input from "@/cps/input/input.vue"
	import { ref } from "vue"

	const chked = ref(false);
	const dmpValue1 = ref('홍길동1');
	const dmpValue2 = ref('홍길동2');
	const dmpValue3 = ref('홍길동3');


	


</script>

<style lang="scss" scoped>

</style>