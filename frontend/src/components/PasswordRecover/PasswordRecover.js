import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import { ToastContainer, toast } from 'react-toastify'
import { Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


import axios from 'axios'
import {
    useParams
  } from "react-router-dom";

class PasswordRecover extends Component {

    constructor(props){
        super(props)

        this.state = {
            token: this.props.match.params.token,
            password: "",
            repeatPassword:"",
            redirect:false
        }
       
        this.passwordTokenVerify = this.passwordTokenVerify.bind(this)
        this.changePassword = this.changePassword.bind(this)

    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});  
        }
    }

    passwordTokenVerify(){

        axios.post(process.env.REACT_APP_API_URL+"/password/token/verify", {token: this.state.token}).then(response => {

            console.log(response)

        
        })
        .catch(error => {


            //toast.error("Error en el servidor");
        });

    }

    formHasError(){
    
        let error = false

        if(this.state.password === ''){
            error = true
            toast.warn("Nueva contraseña no puede estar vacía")
        }
    
        if(this.state.repeatPassword === ''){
            error = true
            toast.warn("Confirmación de la nueva contraseña no puede estar vacía")
        }

        if(this.state.repeatPassword !== this.state.password){
            error = true
            toast.warn("Las contraseñas no coinciden")
        }
    
        return error;
    
    }

    changePassword(){
        
        if(!this.formHasError()){
            axios.post(process.env.REACT_APP_API_URL+"/password/change", {password: this.state.password, repeatPassword: this.state.repeatPassword, token: this.state.token}).then(response => {
                
                if(response.data.success === true){

                    this.setState({
                        password:"", repeatPassword:"", redirect: true
                    })

                    toast.success(response.data.message)

                }else{  

                    if(response.data.errors){
                        response.data.errors.forEach(function(error){
                            toast.error(error.message)    
                        })
                    }else{
                        toast.error(response.data.message) 
                    }
                    

                }

            }).catch(error => {
                toast.error("Error en el servidor")
            })
        }

    }

    componentDidMount(){

        this.passwordTokenVerify()

    }

    render() {

        if(this.state.redirect){
            return (
                <Redirect to="/login" />
            );
        }
        
        return (
            <div>
                <NavbarLanding/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h3>Password Recover</h3>
                            <div className="form-group">
                                <label>Nueva contraseña</label>
                                <input className="form-control" type="password" onChange={this.onFieldChange('password').bind(this)} value={this.state.password}/>
                            </div>
                            <div className="form-group">
                                <label>Repetir nueva contraseña</label>
                                <input className="form-control" type="password" onChange={this.onFieldChange('repeatPassword').bind(this)} value={this.state.repeatPassword}/>
                            </div>
                            <p className="text-center">
                                <button className="btn btn-success" onClick={() => this.changePassword()}>
                                    Cambiar contraseña
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <FooterLanding />
                <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                        />
          	</div>
        );
    }
}

export default PasswordRecover;