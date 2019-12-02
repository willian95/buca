'use strict'

/*
|--------------------------------------------------------------------------
| ModelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Model = use('App/Models/CarModel')

class ModelSeeder {
	async run () {
		
		var model = new Model()
		model.car_brand_id = 1
		model.slug = "modelo-1"
		model.model = "modelo 1"
		await model.save()

		var model = new Model()
		model.car_brand_id = 1
		model.slug = "modelo-2"
		model.model = "modelo 2"
		await model.save()

		var model = new Model()
		model.car_brand_id = 2
		model.slug = "modelo-3"
		model.model = "modelo 3"
		await model.save()

		var model = new Model()
		model.car_brand_id = 2
		model.slug = "modelo-4"
		model.model = "modelo 4"
		await model.save()

	}
}

module.exports = ModelSeeder
