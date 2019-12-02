'use strict'

const Car = use('App/Models/Car')
const Model = use('App/Models/CarModel')
const CarImage = use('App/Models/CarImage')
const Brand = use('App/Models/CarBrand')
const { validate } = use('Validator')
const Helpers = use('Helpers')
const CarTag = use('App/Models/CarTag')

class CarController {

    async store({request, response, auth}){

        try {
            var uniqid = require('uniqid');
            const {car_model_id, price, description, file1Image, file2Image, file3Image, file4Image} = request.all()

            //return response.json(request.all())

            const rules = {
                car_model_id: 'required|integer',
                price: 'required|number',
                description:'required',
                file1Image:'file_types:image'
            }
    
            const messages = {
                'car_model_id.required': 'Modelo es requerido',
                'car_model_id.integer': 'Debe ingresar un modelo válido',
                'price.number': 'El precio no es válido',
                'price.required': 'Precio es requerida',
                'description.required': 'Descripción es requerida',
                'file1Image.file_types': 'Imagen principal debe ser una imagen válida'
            }
    
            const validation = await validate(request.all(), rules, messages)
          
            if (validation.fails()) {
        
                return response.json({"success": false, "errors":validation.messages()})
            }

            let imageName = uniqid()
            const pic = request.file('file1Image')
            await pic.move(Helpers.publicPath('/uploads/'),{
                name: imageName+"."+pic.extname
            })
            

            let user = await auth.getUser()
            
            let car = new Car()
            car.car_model_id = car_model_id
            car.price = price
            car.description = description
            car.user_id = user.id
            car.image = "uploads/"+imageName+"."+pic.extname
            await car.save()

            var model = await Model.find(car_model_id)
            var brand = await model.brand().fetch()

            var carTag = new CarTag
            carTag.car_id = car.id
            carTag.keyword = model.model
            await carTag.save()

            var carTag = new CarTag
            carTag.car_id = car.id
            carTag.keyword = brand.brand
            await carTag.save()

            var carTag = new CarTag
            carTag.car_id = car.id
            carTag.keyword = price
            await carTag.save()

            var splitteredDescription = description.split(" ")
            splitteredDescription.forEach((element) => {

                var carTag = new CarTag
                carTag.car_id = car.id
                carTag.keyword = element
                carTag.save()

            })

            

            if(request.file('file2Image')){
                let imageName = uniqid()
                const pic = request.file('file2Image')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = new CarImage()
                carImage.car_id = car.id
                carImage.image = "uploads/"+imageName+"."+pic.extname
                carImage.position = 2
                await carImage.save()
            }

            if(request.file('file3Image')){
                let imageName = uniqid()
                const pic = request.file('file3Image')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = new CarImage()
                carImage.car_id = car.id
                carImage.image = "uploads/"+imageName+"."+pic.extname
                carImage.position = 3
                await carImage.save()
            }
            
            if(request.file('file4Image')){
                let imageName = uniqid()
                const pic = request.file('file4Image')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = new CarImage()
                carImage.car_id = car.id
                carImage.image = "uploads/"+imageName+"."+pic.extname
                carImage.position = 4
                await carImage.save()
            }

            

            return response.json({"success": true, "message": "Vehiculo publicado"});
            

        } catch (e) {
            response.json(e)
        }

        
    }

    async showCarsByUserId({request, response, auth}){
        
        let user = await auth.getUser()

        let cars = await Car.query().where('user_id', user.id).where('deleted_at', null).with('model').with('model.brand').fetch()
        return response.json(cars)

    }

    async latestPosts({response}){

        let cars = await Car.query().where('deleted_at', null).with('favorites').with('model').with('model.brand').with('user').orderBy('id', 'desc').limit(12).fetch()
        return response.json(cars);

    }

    async show({params, response}){    

        let car = await Car.query().where('id', params.id).where('deleted_at', null).with('model').with('model.brand').with('user').fetch()
        let carCount = await Car.query().where('id', params.id).where('deleted_at', null).with('model').with('model.brand').with('user').count()
        let images = await CarImage.query().where('car_id', params.id).fetch()
        if(carCount){
            return response.json({"success": true, "car":car, "images":images})
        }else{
            return response.json({"success": false})
        }
    }

    async delete({request, response}){

        const {carId} = request.all()

        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        let car = await Car.find(carId)
        car.deleted_at = str
        await car.save()

        return response.json({"success": true, "message": "Publicación eliminada"})

    }   

    async edit({params, response}){

        let car = await Car.query().where('id', params.id).where('deleted_at', null).with('model').with('model.brand').with('user').fetch()
        let images = await CarImage.query().where('car_id', params.id).limit(3).fetch()
        return response.json({"car":car, "images":images})

    }

    async update({request, response, auth}){

        try {
            var uniqid = require('uniqid');
            const {car_model_id, car_id, price, description, file1Image, file2Image, file3Image, file4Image} = request.all()

            const rules = {
                car_model_id: 'required|integer',
                price: 'required|number',
                description:'required',
                file1Image:'file_types:image'
            }
    
            const messages = {
                'car_model_id.required': 'Modelo es requerido',
                'car_model_id.integer': 'Debe ingresar un modelo válido',
                'price.number': 'El precio no es válido',
                'price.required': 'Precio es requerida',
                'description.required': 'Descripción es requerida',
                'file1Image.file_types': 'Imagen principal debe ser una imagen válida'
            }
    
            const validation = await validate(request.all(), rules, messages)
          
            if (validation.fails()) {
        
                return response.json({"success": false, "errors":validation.messages()})
            }
        
            let user = await auth.getUser()
            
            let car = await Car.query().where('id', car_id).where('user_id', user.id).first()
            car.car_model_id = car_model_id
            car.price = price
            car.description = description

            if(request.file('file1EditImage') != null){
                let imageName = uniqid()
                const pic = request.file('file1EditImage')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })
                car.image = "uploads/"+imageName+"."+pic.extname
            }

            await car.save()

            if(request.file('file2EditImage') != null){
                let imageName = uniqid()
                const pic = request.file('file2EditImage')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = await CarImage.query().where('position', 2).where('car_id', car_id).first()
                if(carImage != null){
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }else{
                    let carImage = new CarImage()
                    carImage.position = 2
                    carImage.car_id = car_id
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }
            }

            if(request.file('file3EditImage') != null){
                let imageName = uniqid()
                const pic = request.file('file3EditImage')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = await CarImage.query().where('position', 3).where('car_id', car_id).first()
                if(carImage != null){
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }else{
                    let carImage = new CarImage()
                    carImage.position = 3
                    carImage.car_id = car_id
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }
            }

            if(request.file('file4EditImage') != null){
                let imageName = uniqid()
                const pic = request.file('file4EditImage')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                let carImage = await CarImage.query().where('position', 4).where('car_id', car_id).first()
                if(carImage != null){
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }else{
                    let carImage = new CarImage()
                    carImage.position = 4
                    carImage.car_id = car_id
                    carImage.image = "uploads/"+imageName+"."+pic.extname
                    carImage.save()
                }
            }


            return response.json({"success": true, "message": "Publicación editada"})

        } catch (e) {
            response.json(e.message)
        }        

    }

}

module.exports = CarController
