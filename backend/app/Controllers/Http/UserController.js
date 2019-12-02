'use strict'

const User = use('App/Models/User')
const Helpers = use('Helpers')

class UserController {

    async edit({response, auth}){

        let user = await auth.getUser()
        return response.json(user)

    }

    async update({request, response, auth}){

        try{
            var uniqid = require('uniqid');
            const {phone, username} = request.all()

            let userAuth = await auth.getUser()
            let user = await User.find(userAuth.id)

            if(request.file('fileProfileEditImage') != null){
                let imageName = uniqid()
                const pic = request.file('fileProfileEditImage')
                await pic.move(Helpers.publicPath('/uploads/'),{
                    name: imageName+"."+pic.extname
                })

                
                user.image = "uploads/"+imageName+"."+pic.extname
            }

            user.phone = phone
            user.username = username
            await user.save()

            return response.json({"success": true, "message": "Perfil editado", "image": user.image, "username": user.username})

        }catch(e){

            return response.json({"success": false, "message": e.message})

        }


    }

}

module.exports = UserController
