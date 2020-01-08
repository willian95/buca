import React, { Component } from 'react';

import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import NotificationCard from './partials/NotificationCard'
import axios from 'axios'

class Notifications extends Component {

	constructor(props){
		super(props)

        this.state = {
            unanswered:[],
            answered:[],
        }

        this.fetch = this.fetch.bind(this)

	}

	componentDidMount(){

        this.fetch()
    
    }
    
    fetch(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/notification/fetch", config).then(response => {

            this.setState({
                unanswered: response.data.unanswered,
                answered: response.data.answered
            })

        }).catch(error => {
            console.log(error)
        })

    }

	render() {
		return (
			<div>
                <NavbarLanding></NavbarLanding>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Notificaciones no respondidas</h2>
                        </div>
                    </div>

                    {this.state.unanswered.map((notification, i) => 
                        <NotificationCard image={process.env.REACT_APP_SERVER_URL+"/"+notification.sale.car.image} message={notification.message} notificationType={notification.notification_type_id} notificationId={notification.id} answered={false} status={notification.sale.status.description} fetch={() => this.fetch()}></NotificationCard>
                    )}

                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Notificaciones respondidas</h2>
                        </div>
                    </div>

                    {this.state.answered.map((notification, i) => 
                        <NotificationCard image={process.env.REACT_APP_SERVER_URL+"/"+notification.sale.car.image} message={notification.message} notificationType={notification.notification_type_id} notificationId={notification.id} answered={true} status={notification.sale.status.description} fetch={() => this.fetch()}></NotificationCard>
                    )}


                </div>
                <FooterLanding></FooterLanding>

            </div>
		);
	}
}

export default Notifications;