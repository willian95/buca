import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import {Link} from "react-router-dom";

import axios from 'axios'

class Admin extends Component {

	constructor(props){
        super(props)
        
        this.state = {
            userId: this.props.match.params.user_id,
            user:[],
            saleCount:0,
            buyCount:0,
            rejectedSales:0
        }

        this.fetch = this.fetch.bind(this)

    }
    
    componentDidMount(){

        this.fetch()

    }

    fetch(){

        axios.post(process.env.REACT_APP_API_URL+"/admin/user/info", {user_id: this.state.userId}).then(response => {

            this.setState({
                user: response.data.user,
                saleCount: response.data.saleCount[0]['count(*)'],
                buyCount: response.data.buyCount[0]['count(*)'],
                rejectedSales: response.data.rejectedSales[0]['count(*)']
            })

        }).catch(error => {

        })

    }

    render() {
        return (
            <div>
				<NavbarLanding></NavbarLanding>

				<div className="container">

					<div className="row">
                        <div className="col-lg-4">
                            <p>Nombre: <b>{this.state.user.username}</b></p>
                        </div>
                        <div className="col-lg-4">
                            <p>Email: <b>{this.state.user.email}</b></p>
                        </div>
                        <div className="col-lg-4">
                            <p>Phone: <b>{this.state.user.phone}</b></p>
                        </div>
					</div>

                    <div className="row ad-history">
                        <div className="col-md-4">
                            <Link to={"/admin/user/sold-cars/"+this.props.match.params.user_id}>
                                <div className="user-stats text-center">
                                    <h2>{this.state.saleCount}</h2>
                                    <small>Autos Vendidos</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={"/admin/user/bought-cars/"+this.props.match.params.user_id}>
                                <div className="user-stats text-center">
                                    <h2>{this.state.buyCount}</h2>
                                    <small>Autos Comprados</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={"/admin/user/rejected-sales/"+this.props.match.params.user_id}>
                                <div className="user-stats text-center">
                                    <h2>{this.state.rejectedSales}</h2>
                                    <small>Compras y ventas rechazadas</small>
                                </div>
                            </Link>
                        </div>
                    </div>

				</div>

				<FooterLanding></FooterLanding>
			</div>
        );
    }
}

export default Admin;