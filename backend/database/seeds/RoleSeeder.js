'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('App/Models/Role')

class RoleSeeder {
  async run () {

    let roleUser = new Role()
    roleUser.role = 'User'
    await roleUser.save()

    let roleAdmin = new Role()
    roleAdmin.role = 'Admin'
    await roleAdmin.save()
    


  }
}

module.exports = RoleSeeder
