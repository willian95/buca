'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPositionToCarImagesSchema extends Schema {
  up () {
    this.table('car_images', (table) => {
      table.integer('position').nullable()
    })
  }

}

module.exports = AddPositionToCarImagesSchema
