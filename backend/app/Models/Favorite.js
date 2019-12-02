'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {

    car () {
        return this.belongsTo('App/Models/Car')
    }

    user () {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Favorite
