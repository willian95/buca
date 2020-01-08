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

		let brand = new Brand()
		brand.id = 1
		brand.slug = "acura"
		brand.brand = "Acura"
		await brand.save()

		brand = new Brand()
		brand.id = 2
		brand.slug = "alfa-romeo"
		brand.brand = "Alfa Romeo"
		await brand.save()

		brand = new Brand()
		brand.id = 3
		brand.slug = "aptera"
		brand.brand = "Aptera"
		await brand.save()

		brand = new Brand()
		brand.id = 4
		brand.slug = "aston-martin"
		brand.brand = "Aston Martin"
		await brand.save()

		brand = new Brand()
		brand.id = 5
		brand.slug = "audi"
		brand.brand = "Audi"
		await brand.save()

		brand = new Brand()
		brand.id = 6
		brand.slug = "austin"
		brand.brand = "Austin"
		await brand.save()

		brand = new Brand()
		brand.id = 7
		brand.slug = "bentley"
		brand.brand = "Bentley"
		await brand.save()

		brand = new Brand()
		brand.id = 8
		brand.slug = "bwm"
		brand.brand = "BMW"
		await brand.save()

		brand = new Brand()
		brand.id = 9
		brand.slug = "bugatti"
		brand.brand = "Bugatti"
		await brand.save()

		brand = new Brand()
		brand.id = 10
		brand.slug = "buick"
		brand.brand = "Buick"
		await brand.save()

		brand = new Brand()
		brand.id = 11
		brand.slug = "cadillac"
		brand.brand = "Cadillac"
		await brand.save()

		brand = new Brand()
		brand.id = 12
		brand.slug = "chevrolet"
		brand.brand = "Chevrolet"
		await brand.save()

		brand = new Brand()
		brand.id = 13
		brand.slug = "chrysler"
		brand.brand = "Chrysler"
		await brand.save()

		brand = new Brand()
		brand.id = 14
		brand.slug = "citroen"
		brand.brand = "Citroën"
		await brand.save()

		brand = new Brand()
		brand.id = 15
		brand.slug = "corbin"
		brand.brand = "Corbin"
		await brand.save()

		brand = new Brand()
		brand.id = 16
		brand.slug = "daewoo"
		brand.brand = "Daewoo"
		await brand.save()

		brand = new Brand()
		brand.id = 17
		brand.slug = "daihatsu"
		brand.brand = "Daihatsu"
		await brand.save()

		brand = new Brand()
		brand.id = 18
		brand.slug = "dodge"
		brand.brand = "Dodge"
		await brand.save()

		brand = new Brand()
		brand.id = 19
		brand.slug = "eagle"
		brand.brand = "Eagle"
		await brand.save()

		brand = new Brand()
		brand.id = 20
		brand.slug = "fairthorpe"
		brand.brand = "Fairthorpe"
		await brand.save()

		brand = new Brand()
		brand.id = 21
		brand.slug = "ferrari"
		brand.brand = "Ferrari"
		await brand.save()
		
		brand = new Brand()
		brand.id = 22
		brand.slug = "fiat"
		brand.brand = "FIAT"
		await brand.save()

		brand = new Brand()
		brand.id = 23
		brand.slug = "fillmore"
		brand.brand = "Fillmore"
		await brand.save()

		brand = new Brand()
		brand.id = 24
		brand.slug = "foose"
		brand.brand = "Foose"
		await brand.save()

		brand = new Brand()
		brand.id = 25
		brand.slug = "ford"
		brand.brand = "Ford"
		await brand.save()

		brand = new Brand()
		brand.id = 26
		brand.slug = "geo"
		brand.brand = "Geo"
		await brand.save()

		brand = new Brand()
		brand.id = 27
		brand.slug = "gmc"
		brand.brand = "GMC"
		await brand.save()

		brand = new Brand()
		brand.id = 28
		brand.slug = "hillman"
		brand.brand = "Hillman"
		await brand.save()

		brand = new Brand()
		brand.id = 29
		brand.slug = "holden"
		brand.brand = "Holden"
		await brand.save()
		
		brand = new Brand()
		brand.id = 30
		brand.slug = "hummer"
		brand.brand = "Hummer"
		await brand.save()

		brand = new Brand()
		brand.id = 31
		brand.slug = "hyundai"
		brand.brand = "Hyundai"
		await brand.save()

		brand = new Brand()
		brand.id = 32
		brand.slug = "infiniti"
		brand.brand = "Infiniti"
		await brand.save()

		brand = new Brand()
		brand.id = 33
		brand.slug = "isuzu"
		brand.brand = "Isuzu"
		await brand.save()

		brand = new Brand()
		brand.id = 34
		brand.slug = "jaguar"
		brand.brand = "Jaguar"
		await brand.save()

		brand = new Brand()
		brand.id = 35
		brand.slug = "jeep"
		brand.brand = "Jeep"
		await brand.save()

		brand = new Brand()
		brand.id = 36
		brand.slug = "jensen"
		brand.brand = "Jensen"
		await brand.save()

		brand = new Brand()
		brand.id = 37
		brand.slug = "kia"
		brand.brand = "Kia"
		await brand.save()

		brand = new Brand()
		brand.id = 38
		brand.slug = "lamborghini"
		brand.brand = "Lamborghini"
		await brand.save()

		brand = new Brand()
		brand.id = 39
		brand.slug = "land-rover"
		brand.brand = "Land Rover"
		await brand.save()

		brand = new Brand()
		brand.id = 40
		brand.slug = "lexus"
		brand.brand = "Lexus"
		await brand.save()

		brand = new Brand()
		brand.id = 41
		brand.slug = "lincoln"
		brand.brand = "Lincoln"
		await brand.save()

		brand = new Brand()
		brand.id = 42
		brand.slug = "lotus"
		brand.brand = "Lotus"
		await brand.save()

		brand = new Brand()
		brand.id = 43
		brand.slug = "maserati"
		brand.brand = "Maserati"
		await brand.save()

		brand = new Brand()
		brand.id = 44
		brand.slug = "maybach"
		brand.brand = "Maybach"
		await brand.save()

		brand = new Brand()
		brand.id = 45
		brand.slug = "mazda"
		brand.brand = "Mazda"
		await brand.save()

		brand = new Brand()
		brand.id = 46
		brand.slug = "mclaren"
		brand.brand = "Mclaren"
		await brand.save()

		brand = new Brand()
		brand.id = 47
		brand.slug = "mercedes-benz"
		brand.brand = "Mercedes-Benz"
		await brand.save()

		brand = new Brand()
		brand.id = 48
		brand.slug = "mercury"
		brand.brand = "Mercury"
		await brand.save()

		brand = new Brand()
		brand.id = 49
		brand.slug = "merkur"
		brand.brand = "Merkur"
		await brand.save()

		brand = new Brand()
		brand.id = 50
		brand.slug = "mg"
		brand.brand = "MG"
		await brand.save()

		brand = new Brand()
		brand.id = 51
		brand.slug = "mini"
		brand.brand = "Mini"
		await brand.save()

		brand = new Brand()
		brand.id = 52
		brand.slug = "mitsubishi"
		brand.brand = "Mitsubishi"
		await brand.save()

		brand = new Brand()
		brand.id = 53
		brand.slug = "morgan"
		brand.brand = "Morgan"
		await brand.save()

		brand = new Brand()
		brand.id = 54
		brand.slug = "nissan"
		brand.brand = "Nissan"
		await brand.save()

		brand = new Brand()
		brand.id = 55
		brand.slug = "oldsmobile"
		brand.brand = "Oldsmobile"
		await brand.save()

		brand = new Brand()
		brand.id = 56
		brand.slug = "panoz"
		brand.brand = "Panoz"
		await brand.save()

		brand = new Brand()
		brand.id = 57
		brand.slug = "peugeot"
		brand.brand = "Peugeot"
		await brand.save()

		brand = new Brand()
		brand.id = 58
		brand.slug = "plymouth"
		brand.brand = "Plymouth"
		await brand.save()

		brand = new Brand()
		brand.id = 59
		brand.slug = "pontiac"
		brand.brand = "Pontiac"
		await brand.save()

		brand = new Brand()
		brand.id = 60
		brand.slug = "porsche"
		brand.brand = "Porsche"
		await brand.save()

		brand = new Brand()
		brand.id = 61
		brand.slug = "ram"
		brand.brand = "Ram"
		await brand.save()

		brand = new Brand()
		brand.id = 62
		brand.slug = "rambler"
		brand.brand = "Rambler"
		await brand.save()

		brand = new Brand()
		brand.id = 63
		brand.slug = "renault"
		brand.brand = "Renault"
		await brand.save()

		brand = new Brand()
		brand.id = 64
		brand.slug = "rolls-royce"
		brand.brand = "Rolls-Royce"
		await brand.save()

		brand = new Brand()
		brand.id = 65
		brand.slug = "saab"
		brand.brand = "Saab"
		await brand.save()

		brand = new Brand()
		brand.id = 66
		brand.slug = "saturn"
		brand.brand = "Saturn"
		await brand.save()

		brand = new Brand()
		brand.id = 67
		brand.slug = "scion"
		brand.brand = "Scion"
		await brand.save()

		brand = new Brand()
		brand.id = 68
		brand.slug = "shelby"
		brand.brand = "Shelby"
		await brand.save()

		brand = new Brand()
		brand.id = 69
		brand.slug = "smart"
		brand.brand = "Smart"
		await brand.save()

		brand = new Brand()
		brand.id = 70
		brand.slug = "spyker"
		brand.brand = "Spyker"
		await brand.save()

		brand = new Brand()
		brand.id = 71
		brand.slug = "spyker-cars"
		brand.brand = "Spyker Cars"
		await brand.save()

		brand = new Brand()
		brand.id = 72
		brand.slug = "studebaker"
		brand.brand = "Studebaker"
		await brand.save()

		brand = new Brand()
		brand.id = 73
		brand.slug = "subaru"
		brand.brand = "Subaru"
		await brand.save()

		brand = new Brand()
		brand.id = 74
		brand.slug = "suzuki"
		brand.brand = "Suzuki"
		await brand.save()

		brand = new Brand()
		brand.id = 75
		brand.slug = "tesla"
		brand.brand = "Tesla"
		await brand.save()

		brand = new Brand()
		brand.id = 76
		brand.slug = "toyota"
		brand.brand = "Toyota"
		await brand.save()

		brand = new Brand()
		brand.id = 77
		brand.slug = "volkswagen"
		brand.brand = "Volkswagen"
		await brand.save()

		brand = new Brand()
		brand.id = 78
		brand.slug = "volvo"
		brand.brand = "Volvo"
		await brand.save()

  }
}

module.exports = BrandSeeder
