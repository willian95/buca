'use strict'

const Sale = use('App/Models/Sale')
const Car = use('App/Models/Car')
const User = use('App/Models/User')
const Notification = use('App/Models/Notification')
const Database = use('Database')

class NotificationController {

    async answerNotification({request, response}){

        const {notification_id, answer} = request.all()
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        let notification = await Notification.find(notification_id)
        notification.answered_at = str;
        notification.answer = true
        notification.save()

        var sale = await Sale.find(notification.sale_id)
        sale.status_id = answer
        await sale.save()

        if(answer == 2){
            
            let car = await Car.find(sale.car_id)
            car.sold_at = str
            await car.save()

            let buyer = await User.find(sale.buyer_id)
            let seller = await User.find(sale.seller_id)

            let buyerMessage = "Hola "+buyer.username+", nos complace anunciarte que "+seller.username+" ha aceptado la compra del vehiculo"
            let sellerMessage = "Hola "+seller.username+", has vendido el vehiculo a "+buyer.username+" de manera exitosa"

            this.createNotification(buyer.id, buyerMessage, 2, sale.id)
            this.createNotification(seller.id, sellerMessage, 2, sale.id)

            await Sale.query().where('car_id', sale.car_id).where('id', '<>', sale.id).update({status_id: 3})
            await Database.table('notifications').innerJoin('sales', 'sales.id', 'notifications.sale_id').where('sales.car_id', sale.car_id).update({'notifications.answer': 1})
            let otherSales = await Database.table('sales').where('car_id', sale.car_id).where('id', '<>', sale.id)
            for(let item of otherSales){
                let sellerMessage = "Lamentablemente su oferta fue rechazada"
                this.createNotification(item.buyer_id, sellerMessage, 2, item.id)

            }

        }

        return response.json({"success": true, "message": "Notificación respondida"})

    }

    async simpleAnswer({request, response}){

        const {notificationId} = request.all()

        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        let notification = await Notification.find(notificationId)
        notification.answered_at = str
        notification.answer = true
        await notification.save()

        return response.json({"success": true, "message": "Notificación aceptada"})

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

    async notificationsCount({auth, response}){

        let user = await auth.getUser()

        let sales = await Notification.query().where('user_id', user.id).where('answer', 0).count()
        return response.json({"success": true, "sales": sales})

    }

    async notificationsFetch({auth, response}){

        let user = await auth.getUser()

        let unanswered = await Notification.query().where('user_id', user.id).where('answer', false).with('sale').with('sale.car').with('sale.status').orderBy('id', 'desc').fetch()

        let answered = await Notification.query().where('user_id', user.id).where('answer', true).with('sale').with('sale.car').with('sale.status').orderBy('id', 'desc').fetch()

        return response.json({"success": true, "unanswered": unanswered, 'answered': answered})
    }

}

module.exports = NotificationController
