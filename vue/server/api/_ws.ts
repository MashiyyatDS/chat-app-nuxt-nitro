const roomID = 'chat-room'
const messageHistory: any[] = []

export default defineWebSocketHandler({
	open(peer) {
		peer.subscribe(roomID)
	},
	message(peer, message) {
		messageHistory.push(JSON.parse(message.text()))

		peer.publish(roomID, {
			...JSON.parse(message.text()),
			messageHistory,
		})
	},
})
