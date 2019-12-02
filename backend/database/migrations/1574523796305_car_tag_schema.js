'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarTagSchema extends Schema {
  up () {
    this.create('car_tags', (table) => {
      table.increments()
      table.integer('car_id')
      table.string('keyword')
      table.timestamps()
    })
  }

}

module.exports = CarTagSchema
