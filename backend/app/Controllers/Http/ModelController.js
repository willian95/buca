'use strict'
const Model = use('App/Models/CarModel')

class ModelController {

    async find({params, response}){

        let models = []
        let fetchModels = await Model.query().where('car_brand_id', params.id).fetch()

        for(let i in fetchModels.rows){
            const model = fetchModels.rows[i]
            models.push({"value":model.id, "label":model.model})
        }

        return response.json(models)

    }

}

module.exports = ModelController
