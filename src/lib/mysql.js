import 'dotenv/config'
import mysql from 'mysql2/promise'

let connection = null

export function mysqlconnFn() {
	if (!connection) {
		connection = mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE
		})
	}
	return connection
}
