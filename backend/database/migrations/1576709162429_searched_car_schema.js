'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SearchedCarSchema extends Schema {
  up () {
    this.create('searched_cars', (table) => {
      table.increments()
      table.integer('car_id')
      table.integer('user_id').nullable()
      table.integer('countView')
      table.timestamps()
    })
  }

  down () {
    this.drop('searched_cars')
  }
}

module.exports = SearchedCarSchema
