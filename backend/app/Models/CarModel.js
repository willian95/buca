'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarModel extends Model {

    cars(){
        return this.hasMany('App/Models/Car')
    }

    brand(){
        return this.belongsTo('App/Models/CarBrand')
    }

}

module.exports = CarModel
