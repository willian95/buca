'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarImageSchema extends Schema {
  up () {
    this.create('car_images', (table) => {
      table.increments()
      table.integer('car_id')
      table.string('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('car_images')
  }
}

module.exports = CarImageSchema
