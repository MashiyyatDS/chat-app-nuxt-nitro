const messageHistory: any[] = []

export default defineWebSocketHandler({
	open(peer) {
		peer.subscribe('chat-room')
	},
	message(peer, message) {
		messageHistory.push(JSON.parse(message.text()))

		peer.publish('chat-room', {
			...JSON.parse(message.text()),
			messageHistory,
		})
	},
})
