<script setup></script>

<template>
	<div class="app">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>

	<!-- 
	header 혹은 footer의 조건을 정의하는 방식은
	router에서 제어

	ex)

	 path: '/login',
		component: () => import('@/pages/Login.vue'),
		meta: {
			hideHeader: true,
			hideFooter: true
		}

	<Footer v-if="!route.meta.hideFooter" />
	
	-->


</template>

<style scoped>
	

</style>

<script setup lang="ts">
	import Header from "@/cps/layout/header.vue";
	import Footer from "@/cps/layout/footer.vue";

</script>