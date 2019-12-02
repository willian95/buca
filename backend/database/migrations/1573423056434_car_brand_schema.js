'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarBrandSchema extends Schema {
  up () {
    this.create('car_brands', (table) => {
      table.increments()
      table.string("slug", 254)
      table.string("brand", 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('car_brands')
  }
}

module.exports = CarBrandSchema
