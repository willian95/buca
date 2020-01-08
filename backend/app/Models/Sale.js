'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {

    car () {
        return this.belongsTo('App/Models/Car')
    }

    buyer () {
        return this.belongsTo('App/Models/User', 'buyer_id')
    }

    seller () {
        return this.belongsTo('App/Models/User', 'seller_id')
    }

    status(){
        return this.belongsTo('App/Models/SaleStatus', 'status_id')
    }

}

module.exports = Sale
