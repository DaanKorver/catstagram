import { mysqlconnFn } from '$lib/mysql'
import { createToken, MAX_AGE } from './helper'
import cookie from 'cookie'
import bycrypt from 'bcrypt'

export async function post({ request }) {
	const connection = await mysqlconnFn()
	const { username, email, password } = Object.fromEntries(await request.formData())
	const salt = await bycrypt.genSalt()
	const hashedPassword = await bycrypt.hash(password, salt)
	try {
		const [result] = await connection.query(
			`INSERT INTO users (username, email, password) VALUES (?,?,?)`,
			[username, email, hashedPassword]
		)
		const token = createToken(result.insertId)
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
	} catch (err) {
		console.log(err)
		let msg = ''
		switch (err.errno) {
			case 1062:
				msg = 'A user with this name/email already exists'
				break
		}
		return {
			headers: { Location: `/signup?error=${msg}` },
			status: 302
		}
	}
}
