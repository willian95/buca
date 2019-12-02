'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotificationsSchema extends Schema {
  up () {
    this.create('notifications', (table) => {
      table.increments()
      table.integer('car_id')
      table.string('message')
      table.string('url')
      table.timestamps()

    })
  }

  down () {
    this.drop('notifications')
  }
}

module.exports = NotificationsSchema
