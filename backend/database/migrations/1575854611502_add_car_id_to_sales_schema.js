'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCarIdToSalesSchema extends Schema {
  up () {
    this.table('sales', (table) => {
      table.integer('car_id')
    })
  }

  down () {
    this.table('sales', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddCarIdToSalesSchema
