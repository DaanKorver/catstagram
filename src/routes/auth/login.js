import { mysqlconnFn } from '$lib/mysql'
import { createToken, MAX_AGE } from './helper'
import cookie from 'cookie'
import bycrypt from 'bcrypt'

export async function post({ request }) {
	const connection = await mysqlconnFn()
	const { email, password } = Object.fromEntries(await request.formData())
	const [rows] = await connection.query(
		`SELECT user_id, password FROM users WHERE email = ? LIMIT 1`,
		[email]
	)
	const user = rows[0]
	let msg = ''
	if (user) {
		const auth = await bycrypt.compare(password, user.password)
		if (auth) {
			const token = createToken(user.user_id)
			return {
				headers: {
					'Set-Cookie': cookie.serialize('jwt', token, {
						httpOnly: true,
						maxAge: MAX_AGE * 1000,
						path: '/'
					}),
					Location: '/'
				},
				status: 302
			}
		} else {
			msg = 'Password incorrect'
			return {
				headers: { Location: `/login?error=${msg}` },
				status: 302
			}
		}
	} else {
		msg = "Can't find a user with this email"
		return {
			headers: { Location: `/login?error=${msg}` },
			status: 302
		}
	}
}
