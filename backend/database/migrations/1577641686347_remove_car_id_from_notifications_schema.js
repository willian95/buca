'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemoveCarIdFromNotificationsSchema extends Schema {
  up () {
    this.table('notifications', (table) => {
    
      table.dropColumn('car_id')

    })
  }

}

module.exports = RemoveCarIdFromNotificationsSchema
