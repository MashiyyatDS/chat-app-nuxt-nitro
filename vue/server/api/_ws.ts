const roomID = 'asdasd'

export default defineWebSocketHandler({
	open(peer) {
		peer.subscribe(roomID)

		console.log('Another User Joined')
	},
	message(peer, message) {
		console.log(message.text())

		peer.publish(roomID, message.text())
	},
})
