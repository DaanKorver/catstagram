import cookie from 'cookie'

export async function get({ request }) {
	return {
		headers: {
			'Set-cookie': cookie.serialize('jwt', '', {
				maxAge: 1,
				path: '/'
			}),
			Location: '/'
		},
		status: 302
	}
}
