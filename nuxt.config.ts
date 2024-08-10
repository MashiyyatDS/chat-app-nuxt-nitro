// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
	srcDir: './vue',
	imports: {
		dirs: ['./composables', './stores', './utils', './types'],
	},
	runtimeConfig: {
		LARAVEL_URL: process.env.LARAVEL_URL,
	},
	css: ['~/assets/css/main.css'],
})
