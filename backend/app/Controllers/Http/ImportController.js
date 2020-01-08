'use strict'
const ImportService = use('App/Services/ImportServices')
const Helpers       = use('Helpers')
const CarModel    = use('App/Models/CarModel')

class ImportController {

    async import({request, response})
    {
        let upload  = request.file('upload')
        let fname   = `${new Date().getTime()}.${upload.extname}`
        let dir     = 'uploads/'

        //move uploaded file into custom folder
        await upload.move(Helpers.tmpPath(dir), {
            name: fname
        })

        if (!upload.moved()) {
            console.log('error')
            return (upload.error(), 'Error moving files', 500)
        }

        let send = await ImportService.ImportClassification('tmp/' + dir + fname)
        console.log(send)
    }
}

module.exports = ImportController
