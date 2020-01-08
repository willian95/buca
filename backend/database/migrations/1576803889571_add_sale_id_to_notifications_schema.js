'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddSaleIdToNotificationsSchema extends Schema {
  up () {
    this.table('notifications', (table) => {
      table.integer('sale_id')
    })
  }

  /*down () {
    this.table('add_sale_id_to_notifications', (table) => {
      // reverse alternations
    })
  }*/
}

module.exports = AddSaleIdToNotificationsSchema
