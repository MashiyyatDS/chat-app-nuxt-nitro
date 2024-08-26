import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/**
 * Lab Components
 *
 * */
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components: {
			...components,
			VTimePicker,
			VNumberInput,
			VDateInput,
			VPullToRefresh,
		},
		directives,
	})

	nuxtApp.vueApp.use(vuetify)
})
