'use strict'
const Car = use('App/Models/Car')
const Sale = use('App/Models/Sale')
const User = use('App/Models/User')
const Notification = use('App/Models/Notification')

class ShoppingController {

    async buy({response,request, auth}){

        const {car_id} = request.all()

        let car = await Car.find(car_id)
        let user = await auth.getUser()

        let buyer = await User.find(user.id)
        let seller = await User.find(car.user_id)

        let sale = new Sale
        sale.buyer_id = user.id
        sale.seller_id = car.user_id
        sale.car_id = car_id
        await sale.save()

        let message = "Hola "+seller.username+", "+buyer.username+" está interesado en adquirir tu vehiculo"
        let buyerMessage = "Hola "+buyer.username+", aguarde hasta que "+seller.username+" tome una decisión"

        
        this.createNotification(car.user_id, message, 1, sale.id)
        this.createNotification(user.id, buyerMessage, 2, sale.id)

        return response.json({"success": true, "message": "Notificado al vendedor"})

    }

    async createNotification(user_id, message, type, sale_id){

        let notification = new Notification
        notification.user_id = user_id
        notification.notification_type_id = type
        notification.message = message
        notification.sale_id = sale_id
        notification.answer = false
        await notification.save()

    }

    async countSalesByUser({response, auth}){

        let user = await auth.getUser()

        const saleCount = await Sale.query().where('seller_id', user.id).where('status_id', 2).count()
        return response.json({"success": true, "salesCount": saleCount})
    }

    async countBuyByUser({response, auth}){

        let user = await auth.getUser()

        const saleCount = await Sale.query().where('buyer_id', user.id).where('status_id', 2).count()
        return response.json({"success": true, "salesCount": saleCount})
    }

    async soldCars({params, response, auth}){

        let user = await auth.getUser()

        const sales = await Sale.query().where('seller_id', user.id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').paginate(params.page, 4)
        const totalSales = await Sale.query().where('seller_id', user.id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').count()

        return response.json({"success": true, "sales": sales, "totalSales": totalSales})
    }

    async boughtCars({params, response, auth}){

        let user = await auth.getUser()

        const sales = await Sale.query().where('buyer_id', user.id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').paginate(params.page, 4)
        const totalSales = await Sale.query().where('buyer_id', user.id).where('status_id', 2).with('buyer').with('car').with('car.model').with('car.model.brand').count()

        return response.json({"success": true, "sales": sales, "totalSales": totalSales})
    }

}

module.exports = ShoppingController
