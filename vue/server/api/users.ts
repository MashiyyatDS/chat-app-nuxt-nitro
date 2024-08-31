export default defineEventHandler(async () => {
	const data = (await import('@/json/users.json')).default

	return data
})
