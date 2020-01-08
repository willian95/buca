'use strict'
const Database = use('Database')
const Notification = use('App/Models/Notification')
const SearchedCar = use('App/Models/SearchedCar')
//const { broadcast } = require('../../utils/socket.utils');

class SearchController {

    async search({request, response}){

        const {has_string, searchString} = request.all()
        var data = []

        if(has_string == 1){

            var stringData = []
            var selectQuery = "SELECT cars.id, car_tags.car_id, cars.description, cars.image, cars.price FROM car_tags INNER JOIN cars ON car_tags.car_id = cars.id WHERE "
            var keywords = ""
            var counter = 0

            var splitteredString = searchString.split(" ")
            splitteredString.forEach((element) => {

                if(counter == 0)
                    keywords += "'"+element+"'"
                else
                    keywords += ", '"+element+"'"
                
                counter++
            })

            keywords += ", '"+searchString+"'"
            
            selectQuery = selectQuery + " keyword IN("+keywords+") AND deleted_at IS NULL"+" GROUP BY car_id"

            stringData = await Database.raw(selectQuery)

            

            /*let notification = new Notification
            notification.car_id = 18
            notification.message = "Han buscado tu vehiculo"
            notification.url = "some-url"
            await notification.save()*/

            //broadcast(8, 'notification:notify', notification)

            data.push({"string": stringData})
        }   

        return response.json(data)

    }

    async storeSearchedCars({request, response}){

        const {cars} = request.all()

        cars.forEach((item, index) => {

            this.storeCars(item)

        })

        return response.json({"success": true})

    }

    async storeCars(item){
        
        let searchedCar =await SearchedCar.query().where('car_id', item.id).first()

        if(searchedCar != null){

            let countView = await SearchedCar.query().where('car_id', item.id).pluck('countView')
            countView = parseInt(countView) + 1

            searchedCar.countView = countView
            await searchedCar.save()      

        }else{

            let storeSearchedCar = new SearchedCar
            storeSearchedCar.car_id = item.id
            storeSearchedCar.countView = 1;
            await storeSearchedCar.save()

        }

    }

}

module.exports = SearchController
