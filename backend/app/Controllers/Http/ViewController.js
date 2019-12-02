'use strict'

const View = use('App/Models/View')

class ViewController {

    async store({auth, request, response}){

        const {car_id} = request.all()

        let user = await auth.getUser()

        const view = new View
        view.user_id = user.id
        view.car_id = car_id
        view.save()

        return response.json({"success": true, "message": "Vista almacenada"})

    }

    async count({request, response}){

        const {car_id} = request.all()

        let view = await View.query().where('car_id', car_id).count()
        return response.json({"success": true, "message": view[0]})

    }

}

module.exports = ViewController
