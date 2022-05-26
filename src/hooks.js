import { mysqlconnFn } from '$lib/mysql'
import cookie from 'cookie'
import jsonwebtoken from 'jsonwebtoken'

export async function handle({ event, resolve }) {
	const connection = await mysqlconnFn()
	const cookieStr = event.request.headers.get('cookie')
	let promise = null
	if (cookieStr) {
		const jwt = cookie.parse(cookieStr).jwt
		if (jwt) {
			jsonwebtoken.verify(jwt, process.env.SECRET, async (err, token) => {
				if (err) return
				event.locals.token = jwt
				event.locals.loggedIn = true
				promise = () => {
					return new Promise(async (resolve, reject) => {
						const [rows] = await connection.query(
							`SELECT user_id, username, profile_picture from users WHERE user_id = ?`,
							[token.id]
						)
						const [user] = rows
						resolve(user)
					})
				}
			})
		}
	}
	if (promise) {
		const user = await promise()
		event.locals.user = user
	}
	const response = await resolve(event)
	return response
}

export function getSession(request) {
	return {
		token: request.locals.token ?? '',
		user: request.locals.user ?? null,
		loggedIn: request.locals.token ?? false
	}
}
