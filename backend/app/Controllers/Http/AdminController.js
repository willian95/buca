'use strict'
const User = use('App/Models/User')
const Sale = use('App/Models/Sale')

class AdminController {

    async getUsers({params, response}){

        const users = await User.query().where('role_id', 1).paginate(params.page, 4);
        const totalUsers = await User.query().where('role_id', 1).count()
        return response.json({"success":true, "data":users, "totalUsers": totalUsers})

    }

    async userInfo({request, response}){

        const {user_id} = request.all()

        const user = await User.find(user_id)
        const saleCount = await Sale.query().where('seller_id', user.id).where('status_id', 2).count()
        const buyCount = await Sale.query().where('buyer_id', user.id).where('status_id', 2).count()
        const rejectedSales = await Sale.query().where('buyer_id', user.id).where('status_id', 3).count()

        return response.json({"success": true, "user": user, "saleCount": saleCount, "buyCount": buyCount, 'rejectedSales': rejectedSales})
    }

    async soldCars({params, request, response}){

        const {user_id} = request.all()

        const sales = await Sale.query().where('seller_id', user_id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').paginate(params.page, 4)
        const totalSales = await Sale.query().where('seller_id', user_id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').count()

        return response.json({"success": true, "sales": sales, totalSales: totalSales})
    }

    async boughtCars({params, request, response}){

        const {user_id} = request.all()

        const sales = await Sale.query().where('buyer_id', user_id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').paginate(params.page, 4)
        const totalSales = await Sale.query().where('buyer_id', user_id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').count()

        return response.json({"success": true, "sales": sales, "totalSales": totalSales})
    }

    async rejectedSales({params, request, response}){

        const {user_id} = request.all()

        const sales = await Sale.query().where('buyer_id', user_id).where('status_id', 3).with('buyer').with('car').with('car.model').with('car.model.brand').paginate(params.page, 4)
        const totalSales = await Sale.query().where('buyer_id', user_id).where('status_id', 3).with('buyer').with('car').with('car.model').with('car.model.brand').count()

        return response.json({"success": true, "sales": sales, "totalSales": totalSales})
    }


}

module.exports = AdminController
