import React, { Component } from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

class Banner extends Component {

	constructor(props){
		super(props)

		this.state={
			auth:false,
			totalCars:0
		}

	}

	componentDidMount(){

		let user_id = window.localStorage.getItem('user_id')

		if(user_id != null){
			this.setState({
				auth: true
			})
		}

		axios.get(process.env.REACT_APP_API_URL+"/cars/count/all").then(response => {
			if(response.data.success == true){
				this.setState({
					totalCars: response.data.count[0]['count(*)']
				})
			}
		})

	}

    render() {
		let bannerBtn
		if(this.state.auth == false){
			bannerBtn = <Link to="/register" className="btn btn-theme">Registrate</Link>
		}else{
			bannerBtn = <Link to="/dashboard" className="btn btn-theme">Publica tu vehiculo</Link>
		}

        return (
            <div id="banner">
            	<div className="container">
                	<div className="search-container">
                  		<h2>¿Qué estás buscando?</h2>
						<p>Vehiculos totales <strong>{this.state.totalCars}</strong></p>
                  		{bannerBtn}
					</div>
            	</div>
          	</div>
        );
    }
}

export default Banner;