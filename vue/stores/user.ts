import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
	state: () => {
		return {
			user: {
				id: 1,
				first_name: 'Mashiyyat',
				middle_name: 'Villasenor',
				last_name: 'Delos Santos',
				email: 'delossantos.mash@gmail.com',
			} as User,
		}
	},
	actions: {},
	...(import.meta.client
		? {
				persist: {
					key: 'user',
					storage: localStorage,
				},
		  }
		: {}),
})
