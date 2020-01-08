import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import {Link} from "react-router-dom";
import axios from 'axios'

class Admin extends Component {

	constructor(props){
		super(props)

		this.state = {
			users:[],
			lastPage:0,
			currentPage:1,
			totalUsers:0
		}

		this.fetch = this.fetch.bind(this)
		this.createPagination = this.createPagination.bind(this)

	}

	componentDidMount(){
		this.fetch()
	}

	fetch(page = 1){

		this.setState({
			currentPage: page
		})

		axios.get(process.env.REACT_APP_API_URL+"/admin/users/"+page).then(response => {

			this.setState({
				users: response.data.data.data,
				lastPage: response.data.data.lastPage,
				totalUsers: response.data.totalUsers[0]['count(*)']
			})

		}).catch(error => {

		})

	}

	createPagination(){
        let pagination = []

        for (let i = 1; i <= this.state.lastPage; i++) {
            pagination.push(
                <li key={i}>
					<li><a onClick={() => {this.fetch(i)}} href="#">{i}</a></li>
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

					<div className="row">
						<div className="col-lg-2">

						</div>
						<div className="col-lg-10">
							<p>Usuarios totales: <b>{this.state.totalUsers}</b></p>
							<table className="table">
								<thead>
									<tr>
										<th>#</th>
										<th>Nombre</th>
										<th>Teléfono</th>
										<th>Correo</th>
										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									{this.state.users.map((user, i) =>
										<tr key={user.id}>
											<td>{ (i+1) }</td>
											<td>{user.username}</td>
											<td>{user.phone}</td>
											<td>{user.email}</td>
											<td>
												<Link to={"/admin/user/"+user.id}><i className="fa fa-eye"></i></Link>
											</td>
										</tr>
									)}
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

export default Admin;