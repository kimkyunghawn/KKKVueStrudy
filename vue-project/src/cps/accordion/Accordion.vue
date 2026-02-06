<template>
  <div class="acc_wrap" :class="{ is_open: isOpen }">
		<div class="acc_h">
			<div class="inner">
				<button 
					type="button"
					:disabled="props.disabled"
					class="op_toggle" 
					@click="onToggle"
				>
					<slot name="title" />
				</button>
			</div>
		</div>

		
    <div class="acc_c">
			<div class="inner" v-show="isOpen">
				<slot name="content" />
			</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()

const group = inject<{
  openIndex: { value: number | null }
  register: () => number
  toggle: (index: number) => void
}>('accordionGroup')

if (!group) {
  throw new Error('Accordion must be used inside AccordionGroup')
}

let myIndex = -1

onMounted(() => {
  myIndex = group.register()
})

const isOpen = computed(() => group.openIndex.value === myIndex)

const onToggle = () => {
  if (props.disabled) return
  group.toggle(myIndex)
}
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
