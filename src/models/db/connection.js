const pgp = require('pg-promise')

const connection = process.env.NODE_ENV === 'test'
  ? 'postgres:///simplebookstore_test'
  : 'postgres:///simplebookstore'

const db = pgp(connection)

module.exports = { db }
