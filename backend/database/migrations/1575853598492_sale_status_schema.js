'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleStatusSchema extends Schema {
  up () {
    this.create('sale_statuses', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('sale_statuses')
  }
}

module.exports = SaleStatusSchema
