<template>
	<!--<v-row no-gutters>
		<v-col v-for="(user, key) in users" :key="key" cols="3" class="pa-1">
			<v-card variant="flat" class="border-thin">
				<v-card-text>
					<pre class="text-caption">{{ user }}</pre>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>-->
	<h1>Working...</h1>
</template>

<script setup lang="ts">
import i18next from 'i18next'

const users = ref<User[]>([])

const user = reactive({
	name: 'Mashiyyat',
	company: {
		name: 'LasCasasGaming',
		status: {
			default: 'Active',
			current: 'Pasara na',
		},
	},
})
onMounted(async () => {
	users.value = await $fetch<User[]>('/api/users')

	i18next.t('user')
})

definePageMeta({
	layout: 'default',
})

useHead({
	title: 'Nuxt Experimental',
})
</script>
