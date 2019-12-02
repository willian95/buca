import React, { Component } from 'react';

class Service extends Component {

    constructor(props){
        super(props)

        this.state={
            url: process.env.REACT_APP_SERVER_URL
        }
    }

    render() {
        return (
            <div id="service">
            	<section className="section-padding services-center">
                    <div className="container">
               
                        <div className="heading-panel">
                            <div className="col-xs-12 col-md-12 col-sm-12 text-center">
                                
                                <h1>Our <span className="heading-color"> Feature </span> Services</h1>
                                
                                <p className="heading-text">Eu delicata rationibus usu. Vix te putant utroque, ludus fabellas duo eu, his dico ut debet consectetuer.</p>
                            </div>
                        </div>
                        <div className="row clearfix">
                  
                            <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
                  
                                <div className="services-grid">
                                    <div className="icons icon-right"><i className="flaticon-settings"><img className="icon-image" src={this.state.url + "/images/icons/engine.png"} /></i></div>
                                    <h4>Engine Upgrades</h4>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                  
                                <div className="services-grid">
                                    <div className="icons icon-right"><i className="flaticon-settings"><img className="icon-image" src={this.state.url + "/images/icons/settings.png"} /></i></div>
                                    <h4>Car Inspection</h4>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>

                            </div>
                  
                  
                            <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                                
                                <div className="services-grid">
                                    <div className="icons icon-left"><i className="flaticon-settings"><img className="icon-image" src={this.state.url + "/images/icons/gas-station.png"} /></i></div>
                                    <h4>Car Oil Change</h4>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                                
                                <div className="services-grid">
                                    <div className="icons icon-left"><i className="flaticon-settings"><img className="icon-image" src={this.state.url + "/images/icons/steering-wheel.png"} /></i></div>
                                    <h4>Power steering</h4>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                                
                            </div>
                  
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <figure className="wow zoomIn  animated" data-wow-delay="0ms" data-wow-duration="3500ms" >
                                    <img className="center-block" src={this.state.url + "/images/image3.png"} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
          	</div>
        );
    }
}

export default Service;