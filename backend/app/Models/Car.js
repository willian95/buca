'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Car extends Model {

    model(){
        return this.belongsTo('App/Models/CarModel')
    }

    user(){
        return this.belongsTo('App/Models/User')
    }

    favorites(){
        return this.hasMany('App/Models/Favorite')
    }
    
    views(){
        return this.hasMany('App/Models/View')
    }

}

module.exports = Car
