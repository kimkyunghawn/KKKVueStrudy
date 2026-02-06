<template>

	<div class="acc_wrap" :class="toggleClasses">
		<div class="acc_h">
			<div class="inner">
				<button type="button" 
					class="op_toggle" 
					:disabled="disabled"
  				@click="toggleAccordion()"
					:aria-expanded="props.modelValue"
				>
				<slot name="title"></slot>
				</button>
			</div>
		</div>
		<div class="acc_c" :style="{ height: contentHeight }">
			<div class="inner" ref="contentEl">
				<slot name="content"></slot>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'

const props = defineProps<{
	// 열림/닫힘 상태
  modelValue: boolean,
	disabled?: boolean,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const contentEl = ref<HTMLElement | null>(null)
const contentHeight = ref('0px')

const toggleAccordion = () => {
	// 만약 disabled 상태면 토글 안함
	if(props.disabled) return;
	console.log('토글 클릭됨' + props.modelValue)
  emit('update:modelValue', !props.modelValue)
}

const toggleClasses = computed(() => ({
  is_open: props.modelValue,
  is_close: !props.modelValue,
}))

/** 열림/닫힘 감시 */
watch(
  () => props.modelValue,
  async (isOpen) => {
    await nextTick()

    if (!contentEl.value) return

    if (isOpen) {
      const height = contentEl.value.scrollHeight
      contentHeight.value = `${height}px`
    } else {
      contentHeight.value = '0px'
    }
  },
  { immediate: true }
)
</script>




<style lang="scss">
.acc_wrap {
	padding: 10px;
	border: 1px solid #000;

	.acc_h {
		.op_toggle {
			position: relative;
			display: block;
			width: 100%;
			padding: 10px 24px 10px 10px;
			font-weight: bold;
			font-size: 18px;
			background-color: #f2f2f2;
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				right: 10px;
				width: 12px;
				height: 12px;
				border-right: 2px solid #333;
				border-bottom: 2px solid #333;
				transform: translateY(-50%) rotate(-135deg);
				transition: transform 0.3s ease;
			}
			&:disabled {
				background-color: #ddd;
			}

		}
	}

	.acc_c {
		overflow: hidden;
		transition: height 0.3s ease;
		.inner {
			padding: 10px;
			overflow: auto;
			
		}
	}

	&.is_close {
		.acc_h {
			.op_toggle::after {
				transform: translateY(-50%) rotate(45deg);
			}
		}
		.acc_c {
			height: 0;
		}
	}

}	
</style>