'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddSaleDateToCarsSchema extends Schema {
  up () {
    this.table('cars', (table) => {
      table.timestamp('sold_at').nullable()
    })
  }

  down () {
    this.table('cars', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddSaleDateToCarsSchema
