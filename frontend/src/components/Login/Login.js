import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import { ToastContainer, toast } from 'react-toastify'
import { Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

import './Login.css'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            recoveryEmail:'',
            redirectUser:false,
            redirectAdmin:false,
        };

        this.login = this.login.bind(this)
        this.formHasError = this.formHasError.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.recover = this.recover.bind(this)

    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});  
        }
    }

    formHasError(){
    
        let error = false

        if(this.state.email === ''){
            error = true
            toast.warn("Tu correo es requerido")
        }
    
        if(this.state.password === ''){
            error = true
            toast.warn("Contraseña no puede estar vacía")
        }
    
        return error;
    
    }

    login(){

        axios.post(process.env.REACT_APP_API_URL+"/login", {email: this.state.email, password: this.state.password}).then(response => {

            if(response.data.success === true){
                this.setState({
                    email:'',password:''
                })
                window.localStorage.setItem('token', response.data.token.token)
                window.localStorage.setItem('username', response.data.username)
                window.localStorage.setItem('image', response.data.image)
                window.localStorage.setItem('user_id', response.data.user_id)
                window.localStorage.setItem('rol_id', response.data.rol_id)

                if(response.data.rol_id == 2){
                    this.setState({
                        redirectAdmin: true
                    })
                }else if(response.data.rol_id == 1){
                    this.setState({
                        redirectUser: true
                    })
                }

                toast.success(response.data.message)
            }else{

                response.data.errors.forEach(function(error){
                    toast.error(error.message)    
                })


            }
        
        })
        .catch(error => {

            error.response.data.forEach(function(error){
                toast.error(error.message)    
            })

            //toast.error("Error en el servidor");
        });

    }

    openModal(){
        let modal = document.getElementById("login-forgot-password-modal")
        modal.className = "active-modal login-forgot-password-modal"
    }

    closeModal(){
        let modal = document.getElementById("login-forgot-password-modal");
        modal.classList.remove("active-modal");
        modal.className = "login-forgot-password-modal"
    }

    recover(){

        axios.post(process.env.REACT_APP_API_URL+"/password/recovery", {email: this.state.recoveryEmail}).then(response => {

            if(response.data.success == true){
                toast.success(response.data.message)
                this.closeModal()
            }

        
        })
        .catch(error => {

            error.response.data.forEach(function(error){
                toast.error(error.message)    
            })

            //toast.error("Error en el servidor");
        });

    }

    render() {

        if(this.state.redirectUser == true){
            
            return (
                <Redirect push to="/dashboard" />
            );

        }else if(this.state.redirectAdmin == true){
            
            return (
                <Redirect push to="/admin" />
            );

        }



        return (
            <div className="login">
                <NavbarLanding />
                <div className="main-content-area clearfix">
                   
                    <section className="section-padding no-top gray">
                       
                        <div className="container">
                        
                            <div className="row">
                                
                                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                    
                                    <div className="form-grid">
                                        <form>
                                        
                                        {/* <a className="btn btn-lg btn-block btn-social btn-facebook">
                                                <span className="fa fa-facebook"></span> Sign in with Facebook
                                        </a>
                                        
                                        <a className="btn btn-lg btn-block btn-social btn-google">
                                                <span className="fa fa-google"></span> Sign in with Facebook
                                        </a>
                                        
                                        <h2 className="no-span"><b>(OR)</b></h2> */}
                                        
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input placeholder="Your Email" className="form-control" type="email" onChange={this.onFieldChange('email').bind(this)} value={this.state.email}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input placeholder="Your Password" className="form-control" type="password" onChange={this.onFieldChange('password').bind(this)} value={this.state.password}/>
                                        </div>
                                        <div className="form-group">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-7">
                                                        <div className="skin-minimal">
                                                        <ul className="list">
                                                            <li>
                                                                {/*<input  type="checkbox" id="minimal-checkbox-1" />
                                                                <label for="minimal-checkbox-1">i agree <a href="#">Terms of Services</a></label>*/}
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-5 text-right">
                                                        <p className="help-block"><a data-target="#myModal" data-toggle="modal" onClick={() => this.openModal()}>Forgot password?</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        <button className="btn btn-theme btn-lg btn-block" type="button" onClick={() => this.login()}>Login With Us</button>
                                        </form>
                                    </div>
                                    
                                </div>
                            
                            </div>
                        
                        </div>
                       
                    </section>

                    <div className="login-forgot-password-modal" id="login-forgot-password-modal">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="modal-content">
                                        <div className="modal-header rte">
                                            <h2 className="modal-title">Recuperar contraseña</h2>
                                        </div>
                                        <form>

                                            <div className="container-fluid">
                                                <div className="row">
                                                    

                                                    <div className="col-md-12">
                                                        
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" onChange={this.onFieldChange('recoveryEmail').bind(this)} value={this.state.recoveryEmail}/>
                                                        </div>
                                                    
                                                    </div>
                                                    <div className="col-md-12">
                                                        
                                                        <p className="text-center">
                                                            <button className="btn btn-success" type="button" onClick={() => this.recover()}>
                                                                Recuperar
                                                            </button>
                                                        </p>
                                                    
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" onClick={() => this.closeModal()}>Cancel</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
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
            </div>
        );
    }
}

export default Login;