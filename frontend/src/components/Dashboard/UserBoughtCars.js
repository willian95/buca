import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'

import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios'

class UserBoughtCars extends Component {

	constructor(props){
        super(props)
        
        this.state = {
            sales:[],
            lastPage:0,
            currentPage:1,
            totalSales:0
        }

        this.fetchCars = this.fetchCars.bind(this)
        this.createPagination = this.createPagination.bind(this)

    }
    
    componentDidMount(){

        this.fetchCars()

    }

    fetchCars(page = 1){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }


        axios.get(process.env.REACT_APP_API_URL+"/bought-cars/user/"+page, config).then(response => {
            
            this.setState({
                sales: response.data.sales.data,
                lastPage: response.data.sales.lastPage,
				totalSales: response.data.totalSales[0]['count(*)']
            })
           
        })

    }

    createPagination(){
        let pagination = []

        for (let i = 1; i <= this.state.lastPage; i++) {
            pagination.push(
                <li key={i}>
					<li><a onClick={() => {this.fetchCars(i)}} href="#">{i}</a></li>
                </li>
            )
        }
        
        return pagination
    }

    render() {
        return (
            <div>
				<NavbarLanding></NavbarLanding>

				<div className="container">

                    <div className="row" style={{marginTop: '20px'}}>
                        <div className="col-md-12">
                            <table className="table">
								<thead>
									<tr>
										<th>#</th>
										<th>Comprador</th>
										<th>Telefono comprador</th>
										<th>Correo comprador</th>
                                        <th>Fecha</th>
                                        <th>Imagen</th>
                                        <th>Marca</th>
                                        <th>Modelo</th>
									</tr>
								</thead>
								<tbody>
									{
                                        this.state.sales.map((sales, i) =>{
                                            return <tr key={i + 1}>
                                                    <td>{i + 1}</td>
                                                    <td>{sales.buyer.username}</td>
                                                    <td>{sales.buyer.phone}</td>
                                                    <td>{sales.buyer.email}</td>
                                                    <td>{sales.car.sold_at}</td>
                                                    <td><img style={{width: '150px'}} src={process.env.REACT_APP_SERVER_URL+"/"+sales.car.image} /></td>
                                                    <td>{sales.car.model.brand.brand}</td>
                                                    <td>{sales.car.model.model}</td>
                                                </tr>  
                                        })
                                    }
								</tbody>
							</table>
                            <nav className="pagination" role="navigation" aria-label="pagination">
								<ul className="pagination-list">
									
									{this.createPagination()}
								</ul>
							</nav>
                        </div>
                    </div>

                    

				</div>

				<FooterLanding></FooterLanding>
			</div>
        );
    }
}

export default UserBoughtCars;