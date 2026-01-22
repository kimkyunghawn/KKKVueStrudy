<template>
	<div class="input" :class="wrapperClass">
		<input class="inp"
			:type="type"
			:id="inpId"
			:class="inpClass"
			:name="inpName"
			:placeholder="placeholder"
			v-bind="$attrs"
			:value="modelValue"
			:readonly="readonly" 
			:disabled="disabled"
			@input="onInput"
			autocomplete="off"
		/>
	</div>
</template>



<script setup lang="ts">

	// 지정한곳에서만 속성 상속 받기
	defineOptions({
		inheritAttrs: false,
	});
	// 지정한곳에서만 속성 상속 받기

	interface Props {
		// type?: string,
		wrapperClass?: string | string[] | Record<string, boolean>,
		inpClass?: string | string[] | Record<string, boolean>,
		inpId?: string,
		inpName?: string,
		type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'file' | 'month' | 'week',
		placeholder?: string,
		modelValue?: string | number,
		readonly?: boolean,
		disabled?: boolean,
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'text',
		placeholder: '기본값',
		readonly: false,
		disabled: false,
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string | number): void
	}>();

	const onInput = (e: Event) => {
		if (props.readonly || props.disabled) return

		const target = e.target as HTMLInputElement
		emit('update:modelValue', target.value)
	}



	

</script>

<!-- <script lang="ts">
	export default {
		props: {
			type: {
				type: String,
				default: 'text',
			},
			placeholder: {
				type: String,
				default: '기본값',
			}
		}
	}
</script> -->


<style lang="scss">
	.input {
		input {
			display: block;
			width: 100%;
			height: 54px;
			padding: 4px 16px;
			font-size: 16px;
			border-radius: 8px;
			border: 1px solid #000;
			&:read-only {
				background-color: #ddd;
			}
			&:disabled {
				color: #ddd;
				background-color: #333;
			}
		}
	}
	
</style>