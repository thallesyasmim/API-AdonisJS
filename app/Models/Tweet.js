'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
    user() { // O nome do relacionamento pode ser qualquer um
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Tweet
