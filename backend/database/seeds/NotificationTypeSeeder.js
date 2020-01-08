'use strict'

/*
|--------------------------------------------------------------------------
| NotificationTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NotificationType = use('App/Models/NotificationType')

class NotificationTypeSeeder {
  async run () {
    
    let notificationType = new NotificationType
    notificationType.id = 1
    notificationType.type = "sale"
    await notificationType.save()

    notificationType = new NotificationType
    notificationType.id = 2
    notificationType.type = "new"
    await notificationType.save()

  }
}

module.exports = NotificationTypeSeeder
