'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
      table.increments()
      table.integer('car_id')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoriteSchema
