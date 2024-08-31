<template>
	<h1>Register Page</h1>

	<v-card class="ma-3 border-thin" variant="flat">
		<v-form @submit.prevent="registerUser">
			<v-card-title class="d-flex justify-space-between">
				Register

				<v-btn @click="resetForm">Reset</v-btn>
			</v-card-title>

			<v-divider />

			<v-card-text>
				<v-text-field v-for="(field, key) in userForm" :key="key" v-model="field.value" v-bind="field.attributes" />
			</v-card-text>

			<v-divider />

			<v-card-actions>
				<v-btn type="submit" text="Submit" variant="flat" color="blue" />
			</v-card-actions>
		</v-form>
	</v-card>
</template>

<script setup lang="ts">
//@ts-ignore
import { validate, setLocales, en } from 'robust-validator'

setLocales(en)

const userForm = reactive<{ [key: string]: { type: string; attributes: any; value?: any } }>({
	first_name: {
		type: 'textField',
		attributes: {
			placeholder: 'Enter Your First Name',
			hideDetails: true,
			variant: 'outlined',
			class: 'mb-3',
			density: 'compact',
		},
	},
	middle_name: {
		type: 'textField',
		attributes: {
			placeholder: 'Enter Your Middle Name',
			hideDetails: true,
			variant: 'outlined',
			class: 'mb-3',
			density: 'compact',
		},
	},
	last_name: {
		type: 'textField',
		attributes: {
			placeholder: 'Enter Your Last Name',
			hideDetails: true,
			variant: 'outlined',
			class: 'mb-3',
			density: 'compact',
		},
	},
	email: {
		type: 'email',
		attributes: {
			placeholder: 'Enter Your Email',
			hideDetails: true,
			variant: 'outlined',
			class: 'mb-3',
			density: 'compact',
		},
	},
	password: {
		type: 'password',
		attributes: {
			placeholder: 'Enter Your Password',
			hideDetails: true,
			variant: 'outlined',
			class: 'mb-3',
			density: 'compact',
		},
	},
})

const definition = {
	first_name: 'required|min:1|max:50',
	middle_name: 'required|min:1|max:50',
	last_name: 'required|min:1|max:50',
	email: 'required|email',
	password: 'required|min:1|max:50',
}
async function registerUser() {
	const data = {} as Record<string, any>

	Object.keys(userForm).map((key) => Object.assign(data, { [key]: userForm[key].value }))

	const result = await validate(data, definition)

	console.log(result.isValid ? data : result.errors)
}

function resetForm() {
	Object.keys(userForm).map((key) => (userForm[key].value = null))
}
</script>
