'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserIdToNotificationsSchema extends Schema {
  up () {
    this.table('notifications', (table) => {
      
      table.integer('user_id')
      table.timestamp('answered_at')
      table.boolean('answer')
      table.integer('notification_type_id')

    })
  }

  /*down () {
    this.table('add_user_id_to_notifications', (table) => {
      // reverse alternations
    })
  }*/
}

module.exports = AddUserIdToNotificationsSchema
