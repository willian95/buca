import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            cars: JSON.parse(window.localStorage.getItem('query')),
            carId:"",
        }

        this.showDetails = this.showDetails.bind(this)

    }

    showDetails(id){
        
        this.setState({
            carId: id
        })

    }

    render() {

        if(this.state.carId != 0){
            return (
                <Redirect to={{
                    pathname: '/car/'+this.state.carId
                }} />
            );
		}

        return (
            <div id="seacrh">
            	<NavbarLanding />

                <div class="container">
                
                        <div class="row">
                    
                            <div class="heading-panel">
                                <div class="col-xs-12 col-md-12 col-sm-12 left-side">
                                    <h1>Ultimas <span class="heading-color"> Publicaciones</span></h1>
                                </div>
                            </div>

                            <div class="row grid-style-2 ">
                                <div class="col-md-12 col-xs-12 col-sm-12">
                            
                                {this.state.cars.map((car, i) =>
                                <div className="col-md-4 pointer" onClick={() => this.showDetails(car.id)}>
                                    <div class="category-grid-box-1">
                                        <div class="image">
                                            <img alt="Carspot" src={process.env.REACT_APP_SERVER_URL+"/"+car.image} class="img-responsive card-img" />
                                            <div class="ribbon popular"></div>
                                            <div class="price-tag">
                                                <div class="price"><span>${car.price}</span></div>
                                            </div>
                                        </div>
                                        <div class="short-description-1 clearfix">
                                            {/*<div class="category-title"> <span><a href="#">Car & Bikes</a></span> </div>*/}
                                            {/*<*h3><a title="" href="single-page-listing.html">{car.model.brand.brand}</a></h3>*/}
                                            {/*<p class="location"><i class="fa fa-map-marker"></i>{car.model.model}</p>*/}
                                            {/*<ul class="list-unstyled">
                                                <li><a href="javascript:void(0)"><i class="flaticon-gas-station-1"></i>Diesel</a></li>
                                                <li><a href="javascript:void(0)"><i class="flaticon-dashboard"></i>35,000 km</a></li>
                                                <li><a href="javascript:void(0)"><i class="flaticon-engine-2"></i>1800 cc</a></li>
                                                <li><a href="javascript:void(0)"><i class="flaticon-car-2"></i>SUV</a></li>
                                                <li><a href="javascript:void(0)"><i class="flaticon-cogwheel-outline"></i>White</a></li>
                                            </ul>*/}
                                        </div>
                                        <div class="ad-info-1">
                                            <p><i class="flaticon-calendar"></i> &nbsp;<span>5 Days ago</span> </p>
                                            <ul class="pull-right">
                                                <li> <a href="#"><i class="flaticon-like-1"></i></a> </li>
                                                <li> <a href="#"><i class="flaticon-message"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                                
                            </div>
                        </div> 
                    
                            
                        </div>  
       
                </div>

                <FooterLanding />
          	</div>
        );
    }
}

export default Search;