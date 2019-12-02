'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddImageToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string("image").default("uploads/user.png")
    })
  }

}

module.exports = AddImageToUsersSchema
