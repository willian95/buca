'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordTokenSchema extends Schema {
  up () {
    this.create('password_tokens', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('token')
      table.timestamps()
    })
  }

  down () {
    this.drop('password_tokens')
  }
}

module.exports = PasswordTokenSchema
