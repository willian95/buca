'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDeletedAtToCarsSchema extends Schema {
  up () {
    this.table('cars', (table) => {
      
      table.timestamp('deleted_at').nullable()

    })
  }
}

module.exports = AddDeletedAtToCarsSchema
