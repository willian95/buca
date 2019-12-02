'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddMainImageToCarsSchema extends Schema {
  up () {
    this.table('cars', (table) => {
      
      table.string('image', 254)

    })
  }

}

module.exports = AddMainImageToCarsSchema
