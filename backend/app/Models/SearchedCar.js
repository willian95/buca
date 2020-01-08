'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SearchedCar extends Model {

    user(){
        return this.belongsTo('App/Models/User')
    }

    car () {
        return this.belongsTo('App/Models/Car')
    }

}

module.exports = SearchedCar
