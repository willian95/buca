'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')


class RegisterController {
    
    async store({request, response}){

        const {username, email, phone, password} = request.all()

        const rules = {
            email: 'required|email|unique:users,email',
            password: 'required',
            username:'required',
            phone: 'required'
        }

        const messages = {
            'email.required': 'Email es requerido',
            'email.email': 'Debes ingresar un email válido',
            'email.unique': 'Este email ya existe',
            'password.required': 'Clave es requerida',
            'username.required': 'Nombre es requerido',
            'phone.required': 'Teléfono es requerido'
        }

        const validation = await validate(request.all(), rules, messages)
      
        if (validation.fails()) {
    
            return response.json({"success": false, "errors":validation.messages()})
        }

        const user = new User()
        user.username = username
        user.email = email 
        user.phone = phone
        user.password = password
        await user.save()

        return response.json({"success": true, "message":"Excelente! Te has registrado existosamente"})

    }

}

module.exports = RegisterController
