'use strict'

/*
|--------------------------------------------------------------------------
| BrandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Brand = use('App/Models/CarBrand')

class BrandSeeder {
  	async run () {

		var brand = new Brand()
		brand.slug = "acura"
		brand.brand = "Acura"
		await brand.save()

		var brand = new Brand()
		brand.slug = "alfa-romeo"
		brand.brand = "Alfa Romeo"
		await brand.save()

		var brand = new Brand()
		brand.slug = "aptera"
		brand.brand = "Aptera"
		await brand.save()

		
		
		
	/*aston-martin	Aston Martin
	audi	Audi
	austin	Austin
	bentley	Bentley
	bmw	BMW
	bugatti	Bugatti
	buick	Buick
	cadillac	Cadillac
	chevrolet	Chevrolet
	chrysler	Chrysler
	citroen	Citroën
	corbin	Corbin
	daewoo	Daewoo
	daihatsu	Daihatsu
	dodge	Dodge
	eagle	Eagle
	fairthorpe	Fairthorpe
	ferrari	Ferrari
	fiat	FIAT
	fillmore	Fillmore
	foose	Foose
	ford	Ford
	geo	Geo
	gmc	GMC
	hillman	Hillman
	holden	Holden
	honda	Honda
	hummer	HUMMER
	hyundai	Hyundai
	infiniti	Infiniti
	isuzu	Isuzu
	jaguar	Jaguar
	jeep	Jeep
	jensen	Jensen
	kia	Kia
	lamborghini	Lamborghini
	land-rover	Land Rover
	lexus	Lexus
	lincoln	Lincoln
	lotus	Lotus
	maserati	Maserati
	maybach	Maybach
	mazda	Mazda
	mclaren	McLaren
	mercedes-benz	Mercedes-Benz
	mercury	Mercury
	merkur	Merkur
	mg	MG
	mini	MINI
	mitsubishi	Mitsubishi
	morgan	Morgan
	nissan	Nissan
	oldsmobile	Oldsmobile
	panoz	Panoz
	peugeot	Peugeot
	plymouth	Plymouth
	pontiac	Pontiac
	porsche	Porsche
	ram	Ram
	rambler	Rambler
	renault	Renault
	rolls-royce	Rolls-Royce
	saab	Saab
	saturn	Saturn
	scion	Scion
	shelby	Shelby
	smart	Smart
	spyker	Spyker
	spyker-cars	Spyker Cars
	studebaker	Studebaker
	subaru	Subaru
	suzuki	Suzuki
	tesla	Tesla
	toyota	Toyota
	volkswagen	Volkswagen
	volvo	Volvo*/


  }
}

module.exports = BrandSeeder
