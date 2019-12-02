import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import {
    Link
  } from "react-router-dom";

class NavbarLanding extends Component {

    constructor(props){
        super(props)

        this.state = {
            auth:false,
            name:"",
            url:process.env.REACT_APP_SERVER_URL,
            openUserDropdown:false,
            redirectLanding:false
        }

        this.verify = this.verify.bind(this)
        this.openUserDropdown = this.openUserDropdown.bind(this)
        this.closeUserDropdown = this.closeUserDropdown.bind(this)
        this.isOpenUserDropdown = this.isOpenUserDropdown.bind(this)
        this.logout = this.logout.bind(this)

    }

    verify(){
        
        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        }
            
        axios.get(process.env.REACT_APP_API_URL+"/verify", config).then(response => {
            
            this.setState({
                auth: true,
                name: window.localStorage.getItem('username'),
            })
        }).catch(error => {
            
        })
        
        
    }

    componentDidMount(){
        let _this = this
        window.setTimeout(function(){
            _this.verify()
        }, 200)
    }

    isOpenUserDropdown(){

        if(this.state.openUserDropdown === false){
            this.openUserDropdown()
        }else{
            this.closeUserDropdown()
        }

    }

    openUserDropdown(){
        let dropdown = document.getElementById('user-dropdown')
        dropdown.className = "dropdown-menu active-dropdown"
        this.setState({
            openUserDropdown: true
        })
    }

    closeUserDropdown(){
        let dropdown = document.getElementById('user-dropdown')
        dropdown.className = "dropdown-menu"
        this.setState({
            openUserDropdown: false
        })
    }

    logout(){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user_id')
        this.setState({
            redirectLanding: true
        })
    }

    render() {
        
        let dashboard;
        let login
        let register
        let userDropdown
        if (this.state.auth == true) {
            dashboard = <Link to="/dashboard">Dashboard</Link>;

            userDropdown = <li className="dropdown">
                                <a href="#" onClick={() => this.isOpenUserDropdown()} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img className="img-circle resize" alt="" src={this.state.url+"/"+window.localStorage.getItem('image')} /> <span className="myname hidden-xs"> {this.state.name} </span> <span className="caret"></span></a>
                                <ul className="dropdown-menu" id="user-dropdown">
                                    <li>{dashboard}</li>
                                    <li><a  onClick={() => this.logout()}>Cerrar sesión</a></li>
                                </ul>
                            </li>

        }else{
            login = <li>
                        <Link to="/login"><i className="fa fa-sign-in"></i> Log in</Link>
                    </li>
            
            register = <li className="hidden-xs hidden-sm">
                            <Link to="/register"><i className="fa fa-unlock" aria-hidden="true"></i> Register</Link>
                        </li>
        }

        if(this.state.redirectLanding === true){
            return (
                <Redirect to="/" />
            );
        }

        return (

            <div className="colored-header">
                <div className="header-top dark">
                    <div className="container">
                        <div className="row">
                            <div className="header-top-left col-md-6 col-sm-6 col-xs-12 hidden-xs">
                                <ul className="listnone">
                                    <li><a href="about.html"><i className="fa fa-heart-o" aria-hidden="true"></i> About {this.props.auth}</a></li>
                                    <li><a href="faqs.html"><i className="fa fa-folder-open-o" aria-hidden="true"></i> FAQS</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-globe" aria-hidden="true"></i> Language <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Swedish</a></li>
                                            <li><a href="#">Arabic</a></li>
                                            <li><a href="#">Russian</a></li>
                                            <li><a href="#">chinese</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-right col-md-6 col-sm-6 col-xs-12 ">
                                <div className="pull-right">
                                    <ul className="listnone">
                                        {login}
                                        {register}
                                        {userDropdown}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <nav id="menu-1" className="mega-menu">
           
                    <section className="menu-list-items">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul className="menu-logo">
                                    <li>
                                        <Link to="/"><img width="30px" src={this.state.url+"/images/logo/Logo_azul_1.png"} alt="logo" /></Link>
                                    </li>
                                </ul>
                                <ul className="menu-links">
                                
                                    <li>
                                        {/*<a href="#">Home <i className="fa fa-angle-down fa-indicator"></i></a>
                                        <ul className="drop-down-multilevel">
                                            <li><a href="index-1.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                        </ul>*/}
                                    </li>
                                    <li>
                                        {/*<a href="#"> Cars <i className="fa fa-angle-down fa-indicator"></i></a>
                                        <div className="drop-down grid-col-12">
                                            <div className="grid-row">
                                                <div className="grid-col-2">
                                                    <h3>Condition</h3>
                                                    <ul>
                                                        <li><a href="listing.html">New</a></li>
                                                        <li><a href="listing-4.html">Used</a></li>
                                                        <li><a href="listing-3.html">Reconditioned </a></li>
                                                        <li><a href="#">Featured Cars </a></li>
                                                    </ul>
                                                </div>
                                                <div className="grid-col-6">
                                                    <h3>Brands</h3>
                                                    <ul className="by-make list-inline">
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/1.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/2.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/3.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/4.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                            <   img src="images/brands/5.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/6.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/7.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/8.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/9.png" className="img-responsive" alt=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src="images/brands/11.png" className="img-responsive" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="grid-col-4">
                                                    <h3>Body Type</h3>
                                                        <ul className="list-inline by-category ">
                                                            <li>
                                                                <a href="#">
                                                                    <img alt="Hybrid" src="images/bodytype/1.png" />
                                                                    Convertible
                                                                </a> 
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <img alt="Hybrid" src="images/bodytype/2.png" />
                                                                    Coupe
                                                                </a> 
                                                            </li>
                                                        <li>
                                                            <a href="#">
                                                                <img alt="Hybrid" src="images/bodytype/3.png" />
                                                                Sedan
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img alt="Hybrid" src="images/bodytype/4.png" />
                                                                Van/Minivan
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img alt="Hybrid" src="images/bodytype/5.png" />
                                                                Truck
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img alt="Hybrid" src="images/bodytype/6.png" />
                                                                Hybrid
                                                            </a> 
                                                        </li>
                                            
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>*/}
                                    </li>
                                    <li>

                                        <a href="#">Marcas <i className="fa fa-angle-down fa-indicator"></i></a>
                              
                                        {/*<ul className="drop-down-multilevel">
                                            <li>
                                                <a href="javascript:void(0)">Grid Style<i className="fa fa-angle-right fa-indicator"></i> </a>
                                                
                                                <ul className="drop-down-multilevel">
                                                    <li><a href="listing.html"> Grid Style (Defualt)</a></li>
                                                    <li><a href="listing-1.html"> Grid Style 1</a></li>
                                                    <li><a href="listing-2.html"> Grid Style 2</a></li>
                                                    <li><a href="listing-3.html"> Grid Style 3</a></li>
                                                    <li><a href="listing-4.html"> Grid Style 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">List Style<i className="fa fa-angle-right fa-indicator"></i> </a>
                                                
                                                <ul className="drop-down-multilevel">
                                                    <li><a href="#">List View 1</a></li>
                                                    <li><a href="listing-6.html">List View 2</a></li>
                                                    <li><a href="listing-7.html">List View 3</a></li>
                                                    <li><a href="listing-8.html">List View 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Single Ad<i className="fa fa-angle-right fa-indicator"></i></a>
                                                
                                                <ul className="drop-down-multilevel">
                                                    <li><a href="single-page-listing.html">Single Ad Detail</a></li>
                                                    <li><a href="single-page-listing-1.html">Single Ad (Gallery)</a></li>
                                                    <li><a href="single-page-listing-2.html">Single Ad (Gallery 2)</a></li>
                                                    <li><a href="single-page-listing-3.html">Single Ad Variation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="icons.html">Template Icons </a></li>
                                        </ul>*/}
                                    </li>
                                    <li>
                                        <a href="#">Modelos <i className="fa fa-angle-down fa-indicator"></i></a>
                              
                                        {/*<ul className="drop-down-multilevel">
                                            <li><a href="reviews.html">Expert Reviews</a></li>
                                            <li><a href="review-detail.html">Review Detial</a></li>
                                        </ul>*/}
                                    </li>
                                    <li>
                                        {/*<a href="javascript:void(0)">Compare <i className="fa fa-angle-down fa-indicator"></i></a>
                              
                                        <ul className="drop-down-multilevel">
                                            <li><a href="compare.html">Car Comparison</a></li>
                                            <li><a href="compare-1.html">Comparison Style 2</a></li>
                                            <li><a href="compare-2.html">Comparison Detial</a></li>
                                        </ul>*/}
                                    </li>
                                    <li>

                                        
                                        {/*<a href="javascript:void(0)">Dashboard <i className="fa fa-angle-down fa-indicator"></i></a>*/}
                              
                                        {/*<ul className="drop-down-multilevel">
                                            <li><a href="profile.html">User Profile</a></li>
                                            <li><a href="archives.html">Archives</a></li>
                                            <li><a href="active-ads.html">Active Ads</a></li>
                                            <li><a href="favourite.html">Favourite Ads</a></li>
                                            <li><a href="messages.html">Message Panel</a></li>
                                            <li><a href="deactive.html">Account Deactivation</a></li>
                                        </ul>*/}
                                    </li>
                                    <li>
                                        {/*<a href="javascript:void(0)">Pages <i className="fa fa-angle-down fa-indicator"></i></a>
                              
                                            <div className="drop-down grid-col-12">
                                 
                                                <div className="grid-row">
                                    
                                                    <div className="grid-col-2">
                                                        <h4>Blog</h4>
                                                        <ul>
                                                            <li><a href="blog.html"> Right Sidebar</a></li>
                                                            <li><a href="blog-1.html"> Masonry Style</a></li>
                                                            <li><a href="blog-2.html"> Without Sidebar</a></li>
                                                            <li><a href="blog-details.html">Single Blog </a></li>
                                                        </ul>
                                                    </div>
                                    
                                                    <div className="grid-col-2">
                                                        <h4>Miscellaneous</h4>
                                                        <ul>
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="about-1.html">About Us 2</a></li>
                                                            <li><a href="cooming-soon.html">Comming Soon</a></li>
                                                            <li><a href="elements.html">Shortcodes</a></li>
                                                        </ul>
                                                    </div>
                                    
                                                    <div className="grid-col-2">
                                                        <h4>Others</h4>
                                                        <ul>
                                                            <li><a href="error.html">404 Page</a></li>
                                                            <li><a href="faqs.html">FAQS</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                        </ul>
                                                    </div>
                                    
                                                    <div className="grid-col-2">
                                                        <h4>Extra Page</h4>
                                                        <ul>
                                                            <li><a href="post-ad-1.html">Post Ad</a></li>
                                                            <li><a href="pricing.html">Pricing</a></li>
                                                            <li><a href="site-map.html">Site Map</a></li>
                                                            <li><a href="contact.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                    
                                                    <div className="grid-col-2">
                                                        <h4>Services Page</h4>
                                                        <ul>
                                                            <li><a href="services.html">Services</a></li>
                                                            <li><a href="services-1.html">Services 2</a></li>
                                                            <li><a href="profile.html">Profile</a></li>
                                                            <li><a href="messages.html">Messages</a></li>
                                                        </ul>
                                                    </div>
                                   
                                                    <div className="grid-col-2">
                                                        <h4>Trending</h4>
                                                        <ul>
                                                            <li><a href="reviews.html">Reviews</a></li>
                                                            <li><a href="review-detail.html">Review Detail</a></li>
                                                            <li><a href="compare.html">Compare</a></li>
                                                            <li><a href="compare-2.html">Comapre Detail</a></li>
                                                        </ul>
                                                    </div>
                                    
                                                </div>
                                            </div>*/}
                                        </li>
                                    </ul>
                                    <ul className="menu-search-bar">
                                        {/*<li>
                                            <a>
                                                <div className="contact-in-header clearfix">
                                                    <i className="flaticon-customer-service"></i>
                                                    <span>
                                                        Call Us Now
                                                        <br />
                                                        <strong>111 222 333 444</strong>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
            </div>
        );
    }
}

export default NavbarLanding;