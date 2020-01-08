'use strict'

const User = use('App/Models/User')

class LoginController {

    async login({request, response, auth}){

        const { email, password } = request.all()
        await auth.attempt(email, password)
        let user = await User.findBy('email', email)

        let accessToken = await auth.generate(user)

        return response.json({"success": true, "message":"Logged In", "user_id": user.id, "token": accessToken, "username": user.username, "image": user.image, "rol_id": user.role_id})

    }

}

module.exports = LoginController
