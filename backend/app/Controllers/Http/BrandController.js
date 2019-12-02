'use strict'

const Brand = use('App/Models/CarBrand')

class BrandController {

    async getAll({response}){

        let brands = []
        let fetchBrands = await Brand.all()
        
        for(let i in fetchBrands.rows){
            const brand = fetchBrands.rows[i]
            brands.push({"value":brand.id, "label":brand.brand})
        }

        return response.json(brands)

    }

}

module.exports = BrandController
