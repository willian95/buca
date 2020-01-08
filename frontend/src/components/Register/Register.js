import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

class Register extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            username:'',
            phone:'',
            password:'',
            password_confirmation:'',
        };

        this.register = this.register.bind(this)

    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});  
        }
    }

    formHasError(){
    
        let error = false
    
        if(this.state.username === ''){
          error = true
          toast.warn("Necesitamos tu nombre")
        }
    
        if(this.state.email === ''){
          error = true
          toast.warn("Tu correo es requerido")
        }
    
        if(this.state.password === ''){
          error = true
          toast.warn("Contraseña no puede estar vacía")
        }
    
        if(this.state.password_confirmation === ''){
          error = true
          toast.warn("La confirmación de la contraseña no puede estar vacía")
        }
    
        if(this.state.password !== this.state.password_confirmation){
            
            error = true
            toast.warn("Las contraseñas no coinciden")
    
        }
    
        return error;
    
    }

    register(){
       
        if(!this.formHasError()){
            axios.post(process.env.REACT_APP_API_URL+"/register", {email: this.state.email, username:this.state.username, password: this.state.password, phone: this.state.phone})
            .then(response => {
                
                //console.log(response.data)

                if(response.data.success === true){
                    this.setState({
                        email:'',password:'', username:'',password_confirmation:'' , phone:''
                    })
        
                    toast.success(response.data.message)
                }else{

                    response.data.errors.forEach(function(error){
                        toast.error(error.message)    
                    })


                }
            
            })
            .catch(error => {
                toast.error("Error en el servidor");
            });
        }

    }
    
    render() {
        
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
                                                <span className="fa fa-facebook"></span> Sign up with Facebook
                                        </a>
                                        
                                        <a className="btn btn-lg btn-block btn-social btn-google">
                                                <span className="fa fa-google"></span> Sign up with Facebook
                                        </a>
                                        
                                        <h2 className="no-span"><b>(OR)</b></h2> */}
                                        <div className="form-group">
                                            <label>Nombre completo</label>
                                            <input placeholder="Enter Your Name" className="form-control" type="text" onChange={this.onFieldChange('username').bind(this)} value={this.state.username}/> 
                                        </div>
                                        <div className="form-group">
                                            <label>Teléfono</label>
                                            <input placeholder="Enter Your Contact Number" className="form-control" type="text" onChange={this.onFieldChange('phone').bind(this)} value={this.state.phone}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input placeholder="Your Email" className="form-control" type="email" onChange={this.onFieldChange('email').bind(this)} value={this.state.email}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Clave</label>
                                            <input placeholder="Your Password" className="form-control" type="password" onChange={this.onFieldChange('password').bind(this)} value={this.state.password}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Repetir clave</label>
                                            <input placeholder="Repeat Your Password" className="form-control" type="password" onChange={this.onFieldChange('password_confirmation').bind(this)} value={this.state.password_confirmation}/>
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
                                                {/*<div className="col-xs-12 col-sm-5 text-right">
                                                    <p className="help-block"><a data-target="#myModal" data-toggle="modal">Forgot password?</a>
                                                    </p>
                                                </div>*/}
                                            </div>
                                        </div>
                                        <button className="btn btn-theme btn-lg btn-block" type="button" onClick={() => this.register()}>Register</button>
                                        
                                        </form>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        
                        </div>
                        
                    </section>
                       
                    <FooterLanding />
                </div>

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

export default Register;