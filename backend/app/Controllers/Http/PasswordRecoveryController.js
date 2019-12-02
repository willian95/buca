'use strict'
const Mail = use('Mail')
const Env = use('Env')
const User = use('App/Models/User')
const PasswordToken = use('App/Models/PasswordToken')
const { validate } = use('Validator')

class PasswordRecoveryController {

    async recover ({response, request}) {

        const {email} = request.all()

        let user = await User.findBy('email', email)

        if(user){

            console.log(user.username)

            var uniqid = require('uniqid');

            let token = new PasswordToken()
            token.user_id = user.id
            token.token = uniqid()
            await token.save()

            await Mail.send('emails.passwordRecovery', {"users": user.username, "token": Env.get('FRONTEND_DOMAIN')+"/password/recovery/"+token.token}, (message) => {
                message
                  .to(email)
                  .from(Env.get('MAIL_SENDER'))
                  .subject('Welcome to yardstick')
              })

            return response.json({"success": true, "message": "Email enviado, verifica tu correo"})
        }else{

            return response.json({"success": false, "message": "Email no encontrado"})

        }
    
        
    }

    async verify({request, response}){

        const {token} = request.all()

        let tokenData = await PasswordToken.query().where('token', token).fetch()
        return response.json(tokenData)

    }

    async change({request, response}){

        const {password, repeatPassword, token} = request.all()

        const rules = {
            password: 'required',
            repeatPassword:'required',
            token:'required'
        }

        const messages = {
            'password.required': 'Clave es requerida',
            'repeatPassword.required': 'Confirmación de clave es requerida',
            'token':'Token es requerido'
        }

        const validation = await validate(request.all(), rules, messages)
      
        if (validation.fails()) {
    
            return response.json({"success": false, "errors":validation.messages()})
        }
        
        if(password === repeatPassword){
            //try{

                const passwordToken = await PasswordToken.findBy('token', token)
                const user = await User.findOrFail(passwordToken.user_id)

                user.password = password
                await user.save()

                await PasswordToken.query().where('user_id', user.id).delete()

                return response.json({"success":true, "message":"Contraseña actualizada"})
                

            /*}catch(error){
                return response.json({"success":true, "message": error})
            }*/


        }else{
            return response.json({"success": false, "message": "Claves no coinciden"})
        }
        
        

        

    }

}

module.exports = PasswordRecoveryController
