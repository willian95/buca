'use strict'
const Excel   = require('exceljs')
const CarModel  = use('App/Models/CarModel')

class ImportService {

    static async ImportClassification(filelocation) {
        var workbook = new Excel.Workbook()
    
        workbook = await workbook.xlsx.readFile(filelocation)
    
        let explanation = workbook.getWorksheet('Hoja1') // get sheet name
    
        let colComment = explanation.getColumn('C') //column name
    
        colComment.eachCell(async (cell, rowNumber) => {
          if (rowNumber >= 11) {
            let slug = explanation.getCell('A' + rowNumber).value //get cell and the row
            let model = explanation.getCell('B' + rowNumber).value
            let car_brand_id = explanation.getCell('C' + rowNumber).value
    
            //custom field name in database to variable
            let carModel = {
              slug: slug,
              model: model,
              car_brand_id: car_brand_id
            }
    
            let cars = await CarModel.create(carModel)
          }
        })
    }

}

module.exports = ImportService