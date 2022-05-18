import jsonwebtoken from 'jsonwebtoken'

const MAX_AGE = 7 * 24 * 60 * 60

function createToken(id) {
	return jsonwebtoken.sign({ id }, process.env.SECRET, {
		expiresIn: MAX_AGE
	})
}

export { createToken, MAX_AGE }
