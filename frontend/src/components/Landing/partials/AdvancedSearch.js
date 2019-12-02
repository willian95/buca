import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Card from './Card.js'

class AdvancedSearch extends Component {

	constructor(props){
		super(props)

		this.state={
			brands:[],
			models:[],
			posts:[],
			searchString:"",
			searchRedirect:false
		}

	}

	onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});  
        }
    }

	componentDidMount(){
		this.fetchCars()
	}
	
	fetchCars(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/cars/latest", config).then(response => {
			console.log("advanced search")
			console.log(response)
            this.setState({
                posts: response.data
            })

        }).catch(error => {

        })

	}

	search(){

		var formData = new FormData
		if(this.state.searchString != null){
			formData.append("has_string", 1)
			formData.append("searchString", this.state.searchString)
		}

		axios.post(process.env.REACT_APP_API_URL+"/search", formData).then(response => {

			if(response.data[0]['string'][0].length > 0){
				
				window.localStorage.setItem('query', JSON.stringify( response.data[0]['string'][0]))
				this.setState({
					searchRedirect: true
				})

			}
			
		})

	}

    render() {
		
		if(this.state.searchRedirect == true){
            return (
                <Redirect to={{
                    pathname: '/search/'
                }} />
            );
		}

        return (
            <div className="advance-search">
            	<div className="section-search search-style-2">
              		<div className="container">
                  		<div className="row">
                    		<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                     
                      			<ul className="nav nav-tabs">
                        			<li className="nav-item active">
                           				<a className="nav-link" data-toggle="tab" href="#tab1">Search Car In Details </a>
                        			</li>
                      			</ul>
 
                      			<div className="tab-content clearfix">
                        			<div className="tab-pane fade in active" id="tab1">
                          				<form>
                            				<div className="search-form pull-left">
                              					<div className="search-form-inner pull-left">
                                					<div className="col-md-6 no-padding">
                                  						<div className="form-group">
                                    						<label>Keyword</label>
                                    						<input type="text" className="form-control" placeholder="Eg Honda Civic , Audi , Ford." onChange={this.onFieldChange('searchString').bind(this)} value={this.state.searchString}/>
                                  						</div>
                                					</div>
                              					</div>
                              					<div className="form-group pull-right">
													<button type="button" onClick={() => this.search()} value="submit" className="btn btn-lg btn-theme" >Search Now</button>
                              					</div>
                              				</div>
                           				</form>
                        			</div>
                     			</div>
                  			</div>
               			</div>
					</div>
         		</div>

				<section className="custom-padding gray">
				
					<div className="container">
				
						<div className="row">
					
							<div className="heading-panel">
								<div className="col-xs-12 col-md-12 col-sm-12 left-side">
									<h1>Más <span className="heading-color"> Bucados</span></h1>
								</div>
							</div>
					
							<div className="row grid-style-2 ">
                                <div className="col-md-12 col-xs-12 col-sm-12">
                            
									{this.state.posts.map((car, i) =>
										<Card key={i} favorite={car.favorites} car_id={car.id} brand={car.model.brand.brand} model={car.model.model} price={car.price} image={car.image}/>
									)}
                        
                            	</div>
                        	</div>   
						</div>
					</div>
				</section>
      		</div>
        );
    }
}

export default AdvancedSearch;
