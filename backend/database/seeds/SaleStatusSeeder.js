'use strict'

/*
|--------------------------------------------------------------------------
| SaleStatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const SaleStatus = use('App/Models/SaleStatus')

class SaleStatusSeeder {
  async run () {

    var saleStatus = new SaleStatus
    saleStatus.id = 1
    saleStatus.description = "En espera"
    await saleStatus.save()

    var saleStatus = new SaleStatus
    saleStatus.id = 2
    saleStatus.description = "Aprobada"
    await saleStatus.save()

    var saleStatus = new SaleStatus
    saleStatus.id = 3
    saleStatus.description = "Rechazada"
    await saleStatus.save()

  }
}

module.exports = SaleStatusSeeder
