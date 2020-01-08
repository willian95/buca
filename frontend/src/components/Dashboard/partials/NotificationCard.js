import React, { Component } from 'react';
import axios from 'axios'

import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class NotificationCard extends Component {

	constructor(props){
        super(props)
        
        this.state ={
            showConfirmAprove:false,
            showConfirmReject:false
        }

        this.simpleAnswer = this.simpleAnswer.bind(this)

    }
    
    aprove(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.post(process.env.REACT_APP_API_URL+"/notification/answer", {answer: 2, notification_id: this.props.notificationId}, config).then(response => {


            toast.success(response.data.message)
            this.props.fetch()

        }).catch(error =>{

            console.log(error)

        })

    }

    reject(){
        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.post(process.env.REACT_APP_API_URL+"/notification/answer", {answer: 3, notification_id: this.props.notificationId}, config).then(response => {

            console.log(response)

            toast.success(response.data.message)
            this.props.fetch()

        }).catch(error =>{

            console.log(error)

        })
    }

    showConfirmAprove(){

        this.setState({
            showConfirmAprove: true
        })

    }

    showConfirmReject(){

        this.setState({
            showConfirmReject: true
        })

    }

    simpleAnswer(notificationId){

        axios.post(process.env.REACT_APP_API_URL+"/notification/simple-answer", {notificationId: notificationId}).then(response => {
            this.props.fetch()
            toast.success(response.data.message)
        })

    }

    render() {

        let buttonArea

        if(this.props.answered == true){
            if(this.props.notificationType == 1){
                buttonArea = <div className="row">
                            <div className="col-12">
                            <p className="text-center">{this.props.status}</p>
                            </div>
                        </div>
            }
        }else{

            if(this.props.notificationType == 1){
                buttonArea = <div className="row">
                                <div className="col-12">
                                    <div className="text-right">
                                        <button className="btn btn-primary" onClick={() => this.showConfirmAprove()}>Aceptar</button>
                                        <button className="btn btn-secondary" style={{marginLeft: "10px"}} onClick={() => this.showConfirmReject()}>Rechazar</button>
                                    </div>  
                                </div>
                            </div>
            }else if(this.props.notificationType == 2){
                buttonArea = <div className="row">
                                <div className="col-12">
                                    <div className="text-right">
                                        <button className="btn btn-primary" onClick={() => this.simpleAnswer(this.props.notificationId)}>Aceptar</button>
                                    </div>  
                                </div>
                            </div>
            }

        }

        return (
            <div className="row">
                <div className="col-lg-offset-3 col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <img src={this.props.image} width="100%"/>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        {this.props.message}
                                    </div>
                                </div>
                                {buttonArea}  
                            </div> 
                        </div>
                    </div>
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

                <SweetAlert
                    show={this.state.showConfirmAprove}
                    title="¿Está seguro de aceptar?"
                    showCancelButton
                    onConfirm={() => {
                        console.log("aprove")
                        this.aprove()
                        this.setState({ showConfirmAprove: false });
                    }}
                    onCancel={() => {
                        console.log('cancel'); // eslint-disable-line no-console
                        this.setState({ showConfirmAprove: false });
                    }}
                    onClose={() => {
                      
                        console.log('close')
                    }} // eslint-disable-line no-console
                />

                <SweetAlert
                    show={this.state.showConfirmReject}
                    title="¿Está seguro de rechazar?"
                    showCancelButton
                    onConfirm={() => {

                        this.reject(2)
                        this.setState({ showConfirmReject: false });
                    }}
                    onCancel={() => {
                        console.log('cancel'); // eslint-disable-line no-console
                        this.setState({ showConfirmReject: false });
                    }}
                    onClose={() => {
                       
                        console.log('close')
                    }} // eslint-disable-line no-console
                />

            </div>
        );
    }
}

export default NotificationCard;