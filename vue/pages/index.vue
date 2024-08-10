<template>
	<div>
		<h1>Working</h1>

		<pre>{{ userStore().user }}</pre>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default',
})

useHead({
	title: 'Nuxt Experimental',
})
</script>
