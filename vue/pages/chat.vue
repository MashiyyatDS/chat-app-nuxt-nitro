<template>
	<div class="chat">
		<div class="chat-header">
			<div class="d-flex" style="height: 100%">
				<span class="align-self-center ma-3">Chat App</span>
			</div>
		</div>

		<div class="chat-body">
			<div v-for="(message, key) in messages" :key="key" :class="`d-flex ${message.userId === userId ? 'justify-start' : 'justify-end'}`">
				<v-sheet
					max-width="500"
					class="mb-1 pl-2 pr-2 pt-1 pb-1 rounded-lg"
					variant="flat"
					:color="message.userId === userId ? 'blue' : 'green'"
					density="compact">
					<small>{{ message.message }}</small>
				</v-sheet>
			</div>
		</div>

		<div class="chat-actions">
			<form @submit.prevent="sendMessage">
				<v-text-field
					@enter="sendMessage"
					v-model="messageInput"
					type="text"
					hide-details
					variant="outlined"
					density="compact"
					placeholder="Send Message">
					<template #append-inner>
						<v-btn @click="sendMessage" text="send" size="small" color="primary" class="ml-1 text-capitalize" variant="flat" />
					</template>
				</v-text-field>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useWebSocket } from '@vueuse/core'
//@ts-ignore
import { v4 as uuidv4 } from 'uuid'

const messages = ref<{ userId: ''; message: string }[]>([])
const messageInput = ref('')

const userId = uuidv4()

const { send, data } = useWebSocket(`ws://${location.host}/api/_ws`)

watch(data, () => {
	const dataReceived: { userId: ''; message: string } = JSON.parse(data.value)

	messages.value.push(dataReceived)
})

function sendMessage() {
	messages.value.push({
		userId,
		message: messageInput.value,
	})

	send(
		JSON.stringify({
			userId,
			message: messageInput.value,
		})
	)

	messageInput.value = ''
}
</script>

<style scoped lang="scss">
.chat {
	height: 100vh;

	&-header {
		height: 50px;
		padding: 2px;
		border-bottom: 0.5px solid rgb(211, 211, 211);
	}

	&-body {
		height: calc(100% - 50px - 50px);
		padding: 10px;
		overflow: auto;
	}

	&-actions {
		border-top: 0.5px solid rgb(211, 211, 211);
		height: 50px;
		padding: 5px;
	}
}
</style>
