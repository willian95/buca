'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarModelSchema extends Schema {
  up () {
    this.create('car_models', (table) => {
      table.increments()
      table.integer('car_brand_id')
      table.string('slug', 254)
      table.string('model', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('car_models')
  }
}

module.exports = CarModelSchema
