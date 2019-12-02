import React, { Component } from 'react';

class Card extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (

            <div class="category-grid-box-1">
                <div class="image">
                    <img alt="Carspot" src="images/posting/2.jpg" class="img-responsive" />
                    <div class="ribbon popular"></div>
                    <div class="price-tag">
                        <div class="price"><span>$920,000</span></div>
                    </div>
                </div>
                <div class="short-description-1 clearfix">
                    <div class="category-title"> <span><a href="#">Car & Bikes</a></span> </div>
                    <h3><a title="" href="single-page-listing.html">Porsche 911 Carrera 2017 </a></h3>
                    <p class="location"><i class="fa fa-map-marker"></i> Model Town Link Road London</p>
                    <ul class="list-unstyled">
                        <li><a href="javascript:void(0)"><i class="flaticon-gas-station-1"></i>Diesel</a></li>
                        <li><a href="javascript:void(0)"><i class="flaticon-dashboard"></i>35,000 km</a></li>
                        <li><a href="javascript:void(0)"><i class="flaticon-engine-2"></i>1800 cc</a></li>
                        <li><a href="javascript:void(0)"><i class="flaticon-car-2"></i>SUV</a></li>
                        <li><a href="javascript:void(0)"><i class="flaticon-cogwheel-outline"></i>White</a></li>
                    </ul>
                </div>
                <div class="ad-info-1">
                    <p><i class="flaticon-calendar"></i> &nbsp;<span>5 Days ago</span> </p>
                    <ul class="pull-right">
                        <li> <a href="#"><i class="flaticon-like-1"></i></a> </li>
                        <li> <a href="#"><i class="flaticon-message"></i></a></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Card