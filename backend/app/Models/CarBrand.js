'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarBrand extends Model {

    models () {
        return this.hasMany('App/Models/CarModel')
    }

}

module.exports = CarBrand
