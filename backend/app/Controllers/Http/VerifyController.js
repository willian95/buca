'use strict'

class VerifyController {

    async verify({response, auth}){

        await auth.check()
        return response.json({"success": true})
    }

}

module.exports = VerifyController
