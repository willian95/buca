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
		
		let model = new Model()
		model.car_brand_id = 1
		model.slug = "cl"
		model.model = "CL"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "integra"
		model.model = "Integra"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "mdx"
		model.model = "MDX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "nsx"
		model.model = "NSX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "rdx"
		model.model = "RDX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "rl"
		model.model = "RL"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "rsx"
		model.model = "RSX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "slx"
		model.model = "SLX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "tl"
		model.model = "TL"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "tsx"
		model.model = "TSX"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "vigor"
		model.model = "Vigor"
		await model.save()

		model = new Model()
		model.car_brand_id = 1
		model.slug = "zdx"
		model.model = "ZDX"
		await model.save()

		model = new Model()
		model.car_brand_id = 2
		model.slug = "164"
		model.model = "164"
		await model.save()

		model = new Model()
		model.car_brand_id = 2
		model.slug = "spider"
		model.model = "Spider"
		await model.save()

		model = new Model()
		model.car_brand_id = 3
		model.slug = "2e"
		model.model = "2e"
		await model.save()

		model = new Model()
		model.car_brand_id = 3
		model.slug = "type-1"
		model.model = "Type-1"
		await model.save()

		model = new Model()
		model.car_brand_id = 3
		model.slug = "type-1h"
		model.model = "Type-1h"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "db9"
		model.model = "DB9"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "db9-volanete"
		model.model = "DB9 Volante"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "dbs"
		model.model = "DBS"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "rapide"
		model.model = "Rapide"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "v12-vantage"
		model.model = "V12 Vantage"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "v8-vantage"
		model.model = "V8 Vantage"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "v8-vantage-s"
		model.model = "v8 Vantage S"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "vanquish-s"
		model.model = "Vanquish S"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "vantage"
		model.model = "Vantage"
		await model.save()

		model = new Model()
		model.car_brand_id = 4
		model.slug = "virage"
		model.model = "Virage"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "100"
		model.model = "100"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "200"
		model.model = "200"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "4000"
		model.model = "4000"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "4000cs-quattro"
		model.model = "4000CS Quattro"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "4000s-quattro"
		model.model = "4000s Quattro"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "5000cs-quattro"
		model.model = "5000CS Quattro"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "5000s"
		model.model = "5000S"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "80"
		model.model = "80"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "8090"
		model.model = "80/90"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "90"
		model.model = "90"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a3"
		model.model = "A3"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a4"
		model.model = "A4"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a5"
		model.model = "A5"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a6"
		model.model = "A6"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a7"
		model.model = "A7"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "a8"
		model.model = "A8"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "allroad"
		model.model = "Allroad"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "cabriolet"
		model.model = "Cabriolet"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "coupe-gt"
		model.model = "Coupe GT"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "coupe-quattro"
		model.model = "Coupe Quattro"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "q5"
		model.model = "Q5"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "q7"
		model.model = "Q7"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "quattro"
		model.model = "Quattro"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "r8"
		model.model = "R8"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "riolet"
		model.model = "Riolet"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "rs-4"
		model.model = "RS 4"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "rs-6"
		model.model = "RS 6"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "rs4"
		model.model = "RS4"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "rs6"
		model.model = "RS6"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "s4"
		model.model = "S4"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "s5"
		model.model = "S5"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "s6"
		model.model = "S6"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "s8"
		model.model = "S8"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "tt"
		model.model = "TT"
		await model.save()

		model = new Model()
		model.car_brand_id = 5
		model.slug = "v8"
		model.model = "V8"
		await model.save()

		model = new Model()
		model.car_brand_id = 6
		model.slug = "mini"
		model.model = "Mini"
		await model.save()

		model = new Model()
		model.car_brand_id = 6
		model.slug = "mini-cooper"
		model.model = "Mini Cooper"
		await model.save()

		model = new Model()
		model.car_brand_id = 6
		model.slug = "mini-cooper-s"
		model.model = "Mini Cooper S"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "arnage"
		model.model = "Arnage"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "azure"
		model.model = "Azure"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "azure-t"
		model.model = "Azure T"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "brooklands"
		model.model = "Brooklands"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "continental"
		model.model = "Continental"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "continental-flying-s"
		model.model = "Continental Flying S"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "continental-gt"
		model.model = "Continental GT"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "continental-gtc"
		model.model = "Continental GTC"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "continental-super"
		model.model = "Continental Super"
		await model.save()

		model = new Model()
		model.car_brand_id = 7
		model.slug = "mulsane"
		model.model = "Mulsane"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "1-series"
		model.model = "1 Series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "3-series"
		model.model = "3 Series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "325"
		model.model = "325"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "330"
		model.model = "330"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "5-series"
		model.model = "5-series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "525"
		model.model = "525"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "530"
		model.model = "530"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "545"
		model.model = "545"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "550"
		model.model = "550"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "6-series"
		model.model = "6-series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "600"
		model.model = "600"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "645"
		model.model = "645"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "650"
		model.model = "650"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "7-series"
		model.model =  "7-series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "745"
		model.model =  "745"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "750"
		model.model =  "750"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "760"
		model.model =  "760"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "8-series"
		model.model =  "8 Series"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "alpina-b7"
		model.model =  "Alpina B7"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "m"
		model.model =  "M"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "m-roadster"
		model.model =  "M Roadster"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "m3"
		model.model =  "M3"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "m5"
		model.model =  "M5"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "m6"
		model.model =  "M6"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "x3"
		model.model =  "X3"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "x5"
		model.model =  "X5"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "x5-m"
		model.model =  "X5 M"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "x6"
		model.model =  "X6"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "x6-m"
		model.model =  "X6 M"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "z3"
		model.model =  "Z3"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "z4"
		model.model =  "Z4"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "z4-m"
		model.model =  "Z4 M"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "z4-m-roadster"
		model.model =  "Z4 M Roadster"
		await model.save()

		model = new Model()
		model.car_brand_id = 8
		model.slug = "z8"
		model.model =  "Z8"
		await model.save()



	}
}

module.exports = ModelSeeder
