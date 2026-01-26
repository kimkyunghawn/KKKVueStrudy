<template>
  <div class="radio_box">
    <input type="radio" 
			:name="rName" 
			:id="rId" 
			:checked="modelValue" 
			@change="onchange"
		/>
    <label :for="rId">
      <span class="text">
				<slot>
					{{ label }}
				</slot>
			</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  defineProps <{
		checked?: boolean,
    rName?: string,
    rId?: string,
    label?: string,
		modelValue?: boolean,
  }>();

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void
	}>();

	function onchange(e: Event) {
		const target = e.target as HTMLInputElement;
		emit('update:modelValue', target.checked);
	}

</script>

<style lang="scss" scoped>
	.radio_box {
		position: relative;
		margin: 20px 0;
		> input {
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			&:checked {
				+ label {
					&::before {
						background-color: blue;
					}
				}
			}
		}
		label {
			position: relative;
			display: block;
			padding-left: 30px;
			font-size: 16px;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 24px;
				height: 24px;
				border-radius: 50%;
				border: 1px solid #000;
			}
		}

	}

</style>

