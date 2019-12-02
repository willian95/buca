import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Card extends Component {

    constructor(props){
        super(props)

        this.state = {
            carId:"",
        }

        this.showDetails = this.showDetails.bind(this)
        this.addToFavorite = this.addToFavorite.bind(this)
        this.removeFromFavorite = this.removeFromFavorite.bind(this)

    }

    showDetails(id){
        
        this.setState({
            carId: id
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

                if(this.props.hideOnUnfavorite == true){
                    var element = document.getElementById("favorite-car-"+id)
                    element.classList.add("hide");
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

    render() {

        if(this.state.carId != 0){
            return (
                <Redirect to={{
                    pathname: '/car/'+this.state.carId
                }} />
            );
        }
        
        var is_user = false

        if(this.props.favorite != 1){
            
        
            var favorites = this.props.favorite
            var user_id = window.localStorage.getItem('user_id')
            var i = 0;
            
          
            for(i = 0; i < favorites.length; i++){
            
                if(favorites[i].user_id == user_id){
                    is_user = true
                }
            }
            
        }else{
            is_user = true
        }

        var favoriteButton
        if(is_user){
            favoriteButton = <li> <a onClick={() => this.checkFavorite(this.props.car_id)}><i className={"fa fa-heart "+"favorite-"+this.props.car_id} aria-hidden="true"></i></a> </li>
        }else{
            favoriteButton = <li> <a onClick={() => this.checkFavorite(this.props.car_id)}><i className={"fa fa-heart-o "+"favorite-"+this.props.car_id} aria-hidden="true"></i></a> </li>
        }

        return (
            <div>
                <div className="col-md-4 pointer" id={this.props.id}>
                    <div className="category-grid-box-1">
                        <div className="image" onClick={() => this.showDetails(this.props.car_id)}>
                            <img alt="Carspot" src={process.env.REACT_APP_SERVER_URL+"/"+this.props.image} className="img-responsive card-img" />
                            <div className="ribbon popular"></div>
                            <div className="price-tag">
                                <div className="price"><span>${this.props.price}</span></div>
                            </div>
                        </div>
                        <div className="short-description-1 clearfix" onClick={() => this.showDetails(this.props.car_id)}>
                            {/*<div className="category-title"> <span><a href="#">Car & Bikes</a></span> </div>*/}
                            <h3><a title="" href="single-page-listing.html">{this.props.brand}</a></h3>
                            <p className="location"><i className="fa fa-map-marker"></i>{this.props.model}</p>
                            {/*<ul className="list-unstyled">
                                <li><a href="javascript:void(0)"><i className="flaticon-gas-station-1"></i>Diesel</a></li>
                                <li><a href="javascript:void(0)"><i className="flaticon-dashboard"></i>35,000 km</a></li>
                                <li><a href="javascript:void(0)"><i className="flaticon-engine-2"></i>1800 cc</a></li>
                                <li><a href="javascript:void(0)"><i className="flaticon-car-2"></i>SUV</a></li>
                                <li><a href="javascript:void(0)"><i className="flaticon-cogwheel-outline"></i>White</a></li>
                            </ul>*/}
                        </div>
                        <div className="ad-info-1">
                            <p><i className="flaticon-calendar"></i> &nbsp;<span>5 Days ago</span> </p>
                            <ul className="pull-right">
                                {favoriteButton}
                                {/*<li> <a ><i className="flaticon-message"></i></a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
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

export default Card;