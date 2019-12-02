import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import Slider from 'infinite-react-carousel';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Details extends Component {

    constructor(props){
        super(props)

        this.state = {
            carId: this.props.match.params.id,
            images:[],
            details:[],
            isFavorite:false,
            empty: false,
            countViews:0
        }

        this.fetch = this.fetch.bind(this)
        this.addToFavorite = this.addToFavorite.bind(this)
        this.removeFromFavorite = this.removeFromFavorite.bind(this)
        this.checkFavorite = this.checkFavorite.bind(this)
        this.isFavorite = this.isFavorite.bind(this)
        this.storeView = this.storeView.bind(this)
        this.countViews = this.countViews.bind(this)

    }

    storeView(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.post(process.env.REACT_APP_API_URL+"/view/store", {car_id: this.state.carId}, config).then(response => {

            console.log(response)

        }).catch(error => {

        })
    }

    isFavorite(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.post(process.env.REACT_APP_API_URL+"/favorite/check", {car_id: this.state.carId}, config).then(response => {

            if(response.data.data != null){
                this.setState({
                    isFavorite: true
                })
            }

        }).catch(error => {

        })

    }


    addToFavorite(id){

		let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

		axios.post(process.env.REACT_APP_API_URL+"/favorite", {"car_id": id}, config).then(response => {
			
			if(response.data.success == true){
                toast.success(response.data.message)

                var element = document.getElementsByClassName("favorite-"+id)
                var i = 0;
                for(i = 0; i < element.length; i++){
                    element[i].classList.remove("fa-heart-o");
                    element[i].classList.add("fa-heart");

                }

            }else{
                toast.danger(response.data.message)
            }

		}).catch((error)=> {

		})

    }
    
    removeFromFavorite(id){

		let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

		axios.post(process.env.REACT_APP_API_URL+"/favorite/remove", {"car_id": id}, config).then(response => {
            
            if(response.data.success == true){
                toast.success(response.data.message)

                var element = document.getElementsByClassName("favorite-"+id)
                var i = 0;
                for(i = 0; i < element.length; i++){
                    element[i].classList.remove("fa-heart");
                    element[i].classList.add("fa-heart-o");

                }

            }else{
                toast.danger(response.data.message)
            }
			

		}).catch((error)=> {

		})

    }
    
    checkFavorite(id){

        var element = document.getElementsByClassName("favorite-"+id)
        var hasHeart = false
        var i = 0;
        for(i = 0; i < element.length; i++){
            var classes = element[i].classList

            classes.forEach((element) => {
                if(element == "fa-heart"){
                    hasHeart = true
                }
            })

        }
        if(hasHeart == true){
            this.removeFromFavorite(id)
            //alert(this.props.hideOnUnfavorite)
        }else{
            this.addToFavorite(id)
        }

    }

    componentDidMount(){
        this.fetch()
        this.isFavorite()
        this.storeView()
        this.countViews()
    }   

    fetch(){
        
        axios.get(process.env.REACT_APP_API_URL+"/cars/find/"+this.state.carId).then(response => {
            
            if(response.data.success === true){
                this.setState({
                    details: response.data.car,
                    images: response.data.images,
                    empty:false
                })
            }else{
                this.setState({
                    empty: true
                })
            }


        }).catch(error =>{

        })

    }

    countViews(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.post(process.env.REACT_APP_API_URL+"/view/count", {car_id: this.state.carId}, config).then(response => {
            console.log(response.data.message['count(*)'])
            this.setState({
                countViews: response.data.message['count(*)']
            })

        }).catch(error => {

        })

    }

    render() {
        let emptyState
        if(this.state.empty === true){
            emptyState = <h2 className="text-center">No hay información que mostrar</h2>
        }

        var favoriteButton
        if(this.state.isFavorite == true){
            favoriteButton = <a class="content-box-grid col-md-4 col-sm-4 col-xs-12" onClick={() =>{this.checkFavorite(this.state.carId)}}><i class={"fa fa-heart "+"favorite-"+this.state.carId} ></i> <span class="hidetext">Añadir a favoritos</span></a>
        }else{
            favoriteButton = <a class="content-box-grid col-md-4 col-sm-4 col-xs-12" onClick={() =>{this.checkFavorite(this.state.carId)}}><i class={"fa fa-heart-o "+"favorite-"+this.state.carId} ></i> <span class="hidetext">Añadir a favoritos</span></a>
        }

        return (
            <div id="car-details">
            	<NavbarLanding />
                {emptyState}
                {this.state.details.map((car, i) =>
                    <div className="container">
                        <div className="row">
                            <div class="pricing-area">
                                <div class="col-md-9 col-xs-12 col-sm-8">
                                    <div class="heading-zone">
                                        <h1>{car.model.brand.brand} {car.model.model}</h1>
                                        <div class="short-history">
                                            <ul>
                                                <li><b>{ car.created_at }</b></li>
                                                <li>Vistas: <b>{this.state.countViews}</b></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-4 detail_price col-xs-12">
                                    <div class="singleprice-tag">$ {car.price}<span>(Fixed)</span></div>
                                </div>
                            </div>
                            <div class="col-md-8 col-xs-12 col-sm-12">
                                <div class="singlepage-detail ">
                                    <div class="feuture-posts clearfix">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-12 col-xs-12 big-section">
                                                <Slider dots arrows={false}>
                                                    <div>
                                                        <img src={process.env.REACT_APP_SERVER_URL +"/"+ car.image} />
                                                    </div>
                                                    {this.state.images.map((image, i) =>
                                                        <div>
                                                            <img src={process.env.REACT_APP_SERVER_URL +"/"+ image.image} />
                                                        </div>
                                                    )}
                                                </Slider>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="content-box-grid margin-top-20">
                            
                                        {/*<div class="heading-panel">
                                            <h3 class="main-title text-left">
                                                Key Features
                                            </h3>
                                        </div>
                                        <div class="key-features">
                                            <div class="boxicon">
                                                <i class="flaticon-gas-station-1 petrol"></i>
                                                <p>Petrol</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-dashboard-1 kilo-meter"></i>
                                                <p>35,000 km</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-tool engile-capacity"></i>
                                                <p>1800 cc</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-calendar reg-year"></i>
                                                <p>2014</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-gearshift transmission"></i>
                                                <p>Automatic</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-transport-1 body-type"></i>
                                                <p>Sedan</p>
                                            </div>
                                            <div class="boxicon">
                                                <i class="flaticon-cogwheel-outline car-color"></i>
                                                <p>Blue</p>
                                            </div>
                                        </div>*/}
                                        <div class="specification">
                                            
                                            <div class="heading-panel">
                                                <h3 class="main-title text-left">
                                                    Descripción 
                                                </h3>
                                            </div>
                                            {car.description}
                                        </div>
                            
                                        <div class="ad-related-img">
                                            <img src="images/car-img1.png" alt="" class="img-responsive center-block" />
                                        </div>
                                        {/*<div class="short-features">
                                            
                                            <div class="heading-panel">
                                                <h3 class="main-title text-left">
                                                    Car Features
                                                </h3>
                                            </div>
                                            
                                            <ul class="car-feature-list ">
                                                <li><i class="flaticon-antenna"></i> AM/FM Radio</li>
                                                <li><i class="flaticon-air-conditioner-1"></i> Air Conditioning</li>
                                                <li><i class="flaticon-cd"></i> Cassette Player</li>
                                                <li><i class="flaticon-light-bulb"></i> Power Locks</li>
                                                <li><i class="flaticon-rearview-mirror"></i> Power Mirrors</li>
                                                <li><i class="flaticon-car-steering-wheel"></i> Power Steering</li>
                                                <li><i class="flaticon-car-door"></i> Power Windows</li>
                                                <li><i class="flaticon-disc-brake"></i> Anti-lock Braking</li>
                                                <li><i class="flaticon-rim"></i> 19 Inch Alloy Wheels</li>
                                                <li><i class="flaticon-message"></i> Cruise Control</li>
                                                <li><i class="flaticon-airbag"></i> Front Airbag Package</li>
                                                <li><i class="flaticon-photo-camera-1"></i> Reversing Camera</li>
                                            </ul>
                                        </div>*/}
                            
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="ad-share text-center">
                                        {/*<div data-toggle="modal" data-target=".share-ad" class="content-box-grid col-md-4 col-sm-4 col-xs-12">
                                            <i class="fa fa-share-alt"></i> <span class="hidetext">Share</span>
                                        </div>*/}
                                        {favoriteButton}
                                        {/*<div data-target=".report-quote" data-toggle="modal" class="content-box-grid col-md-4 col-sm-4 col-xs-12">
                                            <i class="fa fa-warning"></i> <span class="hidetext">Report</span>
                                    </div>*/}
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12 col-sm-12">
                                <div class="sidebar">
                                    <div class="contact white-bg">
                                    
                                        <button class="btn-block btn-contact contactEmail" data-toggle="modal" data-target=".price-quote" >{car.user.email}</button>
                                        <button class="btn-block btn-contact contactPhone number" data-last="111111X" >{car.user.phone}</button>
                                    </div>
                                    <div class="white-bg user-contact-info">
                                        <div class="user-info-card">
                                            <div class="user-photo col-md-4 col-sm-3  col-xs-4">
                                                <img src="images/users/3.jpg" alt="" />
                                            </div>
                                            <div class="user-information col-md-8 col-sm-9 col-xs-8">
                                                <span class="user-name"><a class="hover-color" href="profile.html">{car.user.username}</a></span>
                                                <div class="item-date">
                                                    <span class="ad-pub">Published on: 10 Dec 2017</span><br />
                                                   {/* <a href="#" class="link">More Ads</a>*/}
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="ad-listing-meta">
                                            <ul>
                                                {/*<li>Ad Id: <span class="color">{car.id}</span></li>*/}
                                                <li>Visitas: <span class="color">{this.state.countViews}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <FooterLanding />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
          	</div>
        );
    }
}

export default Details;