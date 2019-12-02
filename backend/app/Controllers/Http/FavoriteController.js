'use strict'

const Favorite = use('App/Models/Favorite')
const Car = use('App/Models/Car')

class FavoriteController {

    async store({request, response, auth}){

        const {car_id} = request.all()

        let user = await auth.getUser()

        const favorite = new Favorite
        favorite.car_id = car_id
        favorite.user_id = user.id
        await favorite.save()

        return response.json({"success": true, "message": "Favorito agregado"})

    }

    async remove({request, response, auth}){

        const {car_id} = request.all()

        let user = await auth.getUser()

        const favorite = await Favorite.query().where('user_id', user.id).where('car_id', car_id).first()
        await favorite.delete()
        return response.json({"success": true, "message": "Favorito removido"})

    }

    async countFavorites({response, auth}){

        let user = await auth.getUser()

        const favorites = await Favorite.query().where('user_id', user.id).count()
        return response.json({"success": true, "message": favorites[0]})

    }

    async fetch({response, auth}){

        let user = await auth.getUser()
        let data= await Favorite.query().where('user_id', user.id).with('car').with('car.model').with('car.model.brand').fetch()

        return response.json({"success": true, "data": data})

    }

    async isFavorite({response, request, auth}){

        const {car_id} = request.all()

        let user = await auth.getUser()
        let data = await Favorite.query().where('user_id', user.id).where('car_id', car_id).first()

        return response.json({"success": true, "data": data})

    }

}

module.exports = FavoriteController
