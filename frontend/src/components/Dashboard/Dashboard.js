import React, { Component } from 'react';
import axios from 'axios'
import Select from 'react-select'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import {Link} from "react-router-dom";

import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Dashboard.css'

import Moment from 'react-moment';
import 'moment-timezone';


class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {
            modalOpen:false,
            brands:[],
            models:[],
            choosenBrand:"",
            choosenModel:"",
            description:"",
            price:0,
            file1Image:"",
            file2Image:"",
            file3Image:"",
            file4Image:"",
            choosenEditBrand:"",
            choosenEditModel:"",
            descriptionEdit:"",
            priceEdit:0,
            file1EditImage:"",
            file2EditImage:"",
            file3EditImage:"",
            file4EditImage:"",
            file1UpdateImage:"",
            file2UpdateImage:"",
            file3UpdateImage:"",
            file4UpdateImage:"",
            fileProfileUpdateImage:"",
            cars:[],
            auth:false,
            show:false,
            carId:0,
            editId:0,
            username:"",
            phone:"",
            userEditId:0,
            favoritesCount:0,
            notificationsCount: 0,
            countSales:0,
            countBuy:0
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openEditModal = this.openEditModal.bind(this)
        this.closeEditModal = this.closeEditModal.bind(this)
        this.openEditProfileModal = this.openEditProfileModal.bind(this)
        this.closeEditProfileModal = this.closeEditProfileModal.bind(this)
        this.fetchBrands = this.fetchBrands.bind(this)
        this.fetchModels = this.fetchModels.bind(this)
        this.fetchModelEdit = this.fetchModelEdit.bind(this)
        this.formHasError = this.formHasError.bind(this)
        this.publish = this.publish.bind(this)
        this.update = this.update.bind(this)
        this.fetchCars = this.fetchCars.bind(this)
        this.deleteConfirm = this.deleteConfirm.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.countFavorites = this.countFavorites.bind(this)
        this.countNotifications = this.countNotifications.bind(this)
        this.countSales = this.countSales.bind(this)
        this.countBuy = this.countBuy.bind(this)

        this.handleBrandChange = this.handleBrandChange.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)
        this.handleFile1Change = this.handleFile1Change.bind(this);
        this.handleFile2Change = this.handleFile2Change.bind(this);
        this.handleFile3Change = this.handleFile3Change.bind(this);
        this.handleFile4Change = this.handleFile4Change.bind(this);
        this.handleFileProfileChangeEdit = this.handleFileProfileChangeEdit.bind(this)

        this.handleBrandChangeEdit = this.handleBrandChangeEdit.bind(this)
        this.handleModelChangeEdit = this.handleModelChangeEdit.bind(this)
        this.handleFile1ChangeEdit = this.handleFile1ChangeEdit.bind(this);
        this.handleFile2ChangeEdit = this.handleFile2ChangeEdit.bind(this);
        this.handleFile3ChangeEdit = this.handleFile3ChangeEdit.bind(this);
        this.handleFile4ChangeEdit = this.handleFile4ChangeEdit.bind(this);

    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});  
        }
    }

    componentDidMount(){
        
        let _this = this

        window.setTimeout(function(){

            _this.props.verify().then(response => {

                _this.setState({
                    auth: true
                })
                
    
            }).catch(error => {
                _this.setState({
                    auth: false
                })
            })
    
            _this.fetchCars()
            _this.countFavorites()
            _this.countNotifications()
            _this.countSales()
            _this.countBuy()

        }, 200)
    
    }

    handleBrandChange = choosenBrand => {
        this.setState({ choosenBrand });
        //console.log(`Option selected:`, choosenBrand.value);
        this.fetchModels(choosenBrand.value)
    };

    handleModelChange = choosenModel => {
        this.setState({ choosenModel });
        //console.log(`Option selected:`, choosenModel);
    };

    handleFile1Change(selectorFiles)
    {
        this.setState({
            file1Image: selectorFiles
        })

    }

    handleFile2Change(selectorFiles)
    {
        this.setState({
            file2Image: selectorFiles
        })
        
    }

    handleFile3Change(selectorFiles)
    {
        this.setState({
            file3Image: selectorFiles
        })
        
    }

    handleFile4Change(selectorFiles)
    {
        this.setState({
            file4Image: selectorFiles
        })
        
    }

    handleBrandChangeEdit = choosenEditBrand => {
        this.setState({ choosenEditBrand });
        //console.log(`Option selected:`, choosenBrand.value);
    };

    handleModelChangeEdit = choosenEditModel => {
        this.setState({ choosenEditModel });
        //console.log(`Option selected:`, choosenModel);
    };

    handleFile1ChangeEdit(selectorFiles)
    {
        this.setState({
            file1UpdateImage: selectorFiles
        })

    }

    handleFile2ChangeEdit(selectorFiles)
    {
        this.setState({
            file2UpdateImage: selectorFiles
        })
        
    }

    handleFile3ChangeEdit(selectorFiles)
    {
        this.setState({
            file3UpdateImage: selectorFiles
        })
        
    }

    handleFile4ChangeEdit(selectorFiles)
    {
        this.setState({
            file4UpdateImage: selectorFiles
        })
        
    }

    handleFileProfileChangeEdit(selectorFiles)
    {
        this.setState({
            fileProfileUpdateImage: selectorFiles
        })

    }

    openModal(){
        let modal = document.getElementById("dashboard-create-modal")
        modal.className = "active-modal dashboard-create-modal"
        this.fetchBrands()
    }

    closeModal(){
        let modal = document.getElementById("dashboard-create-modal");
        modal.classList.remove("active-modal");
        modal.className = "dashboard-create-modal"
    }

    openEditModal(){
        let modal = document.getElementById("dashboard-edit-modal")
        modal.className = "active-modal dashboard-create-modal"
        //this.fetchBrands()
    }

    closeEditModal(){
        let modal = document.getElementById("dashboard-edit-modal");
        modal.classList.remove("active-modal");
        modal.className = "dashboard-create-modal"
    }

    openEditProfileModal(){
        let modal = document.getElementById("dashboard-edit-profile-modal")
        modal.className = "active-modal dashboard-create-modal"
        
        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/users/edit", config).then(response => {

            this.setState({
                username:response.data.username,
                phone:response.data.phone,
                userEditId:response.data.id
            })

        }).catch(error => {

        })

    }


    closeEditProfileModal(){
        let modal = document.getElementById("dashboard-edit-profile-modal");
        modal.classList.remove("active-modal");
        modal.className = "dashboard-create-modal"
    }

    fetchBrands(){

        axios.get(process.env.REACT_APP_API_URL+"/brands/all").then(response => {
            //console.log(response)
            this.setState({brands: response.data})
        
        })
        .catch(error => {

            error.response.data.forEach(function(error){
                //toast.error(error.message)    
            })

        });

    }

    fetchModels(id){

        axios.get(process.env.REACT_APP_API_URL+"/models/"+id).then(response => {

            this.setState({models: response.data})
            console.log(this.state.models)
        })
        .catch(error => {

            error.response.data.forEach(function(error){
                //toast.error(error.message)    
            })

        });

    }

    fetchModelEdit(id){
        return new Promise(function(resolve, reject){

            axios.get(process.env.REACT_APP_API_URL+"/models/"+id).then(response => {
                resolve(response);
            }).catch(error => {
                reject(403);
            })
          
        })
    }

    formHasError(){
    
        let error = false

        if(this.state.choosenBrand === ''){
            error = true
            toast.warn("Debe seleccionar una marca")
        }
    
        if(this.state.choosenModel === ''){
            error = true
            toast.warn("Debe seleccionar un modelo")
        }

        if(this.state.description === ''){
            error = true
            toast.warn("Debe agregar una descripción")
        }

        if(this.state.price === 0){
            error = true
            toast.warn("Debe agregar un precio")
        }

        if(this.state.file1Image === ""){
            error = true
            toast.warn("Debe agregar una imagen principal")
        }
    
        return error;
    
    }

    formEditHasError(){
    
        let error = false

        if(this.state.choosenEditBrand === ''){
            error = true
            toast.warn("Debe seleccionar una marca")
        }
    
        if(this.state.choosenEditModel === ''){
            error = true
            toast.warn("Debe seleccionar un modelo")
        }

        if(this.state.descriptionEdit === ''){
            error = true
            toast.warn("Debe agregar una descripción")
        }

        if(this.state.priceEdit === 0){
            error = true
            toast.warn("Debe agregar un precio")
        }

        if(this.state.file1EditImage === ""){
            error = true
            toast.warn("Debe agregar una imagen principal")
        }
    
        return error;
    
    }

    fetchCars(){
        
        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/cars/user", config).then(response => {
            //console.log(response.data)
            this.setState({
                cars: response.data
            })
        
        })
        .catch(error => {
            console.log(error)
        });

    }

    publish(){

        if(!this.formHasError()){

            let config = {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('token'),
                    'Content-Type': 'multipart/form-data',
                }
            }

            let formData = new FormData();
            formData.append('car_model_id', this.state.choosenModel.value);
            formData.append('price', this.state.price);
            formData.append('description', this.state.description);
            formData.append('file1Image', this.state.file1Image);
            formData.append('file2Image', this.state.file2Image);
            formData.append('file3Image', this.state.file3Image);
            formData.append('file4Image', this.state.file4Image);
            
            axios.post(process.env.REACT_APP_API_URL+"/cars/store", formData, config).then(response => {

                console.log(response)

                if(response.data.success === true){

                    toast.success(response.data.message)

                    this.setState({
                        choosenBrand: "",
                        choosenModel: "",
                        description:"",
                        price:""
                    })

                    this.closeModal()
                    this.fetchCars()

                }else{

                    //console.log(response)

                    response.data.errors.forEach(function(error){
                        toast.error(error.message)    
                    })
                }
            
            })
            .catch(error => {
                console.log(error)
    
            });

        }

    }

    update(){

        if(!this.formEditHasError()){

            let config = {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('token'),
                    'Content-Type': 'multipart/form-data',
                }
            }

            let formData = new FormData();
            formData.append('car_model_id', this.state.choosenEditModel.value);
            formData.append('price', this.state.priceEdit);
            formData.append('car_id', this.state.editId);
            formData.append('description', this.state.descriptionEdit);
            formData.append('file1EditImage', this.state.file1UpdateImage);
            formData.append('file2EditImage', this.state.file2UpdateImage);
            formData.append('file3EditImage', this.state.file3UpdateImage);
            formData.append('file4EditImage', this.state.file4UpdateImage);
            
            axios.post(process.env.REACT_APP_API_URL+"/cars/update", formData, config).then(response => {

                if(response.data.success === true){

                    toast.success(response.data.message)

                    this.setState({
                        choosenBrand: "",
                        choosenModel: "",
                        description:"",
                        price:""
                    })

                    this.closeEditModal()
                    this.fetchCars()

                }else{

                    //console.log(response)

                    response.data.errors.forEach(function(error){
                        toast.error(error.message)    
                    })
                }
            
            })
            .catch(error => {
                //console.log(error)
    
            });

        }

    }

    updateProfile(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data',
            }
        }

        let formData = new FormData();
        formData.append('fileProfileEditImage', this.state.fileProfileUpdateImage);
        formData.append('phone', this.state.phone)
        formData.append('username', this.state.username)
        
        axios.post(process.env.REACT_APP_API_URL+"/users/update", formData, config).then(response => {

            if(response.data.success == true){
                window.localStorage.setItem("image", response.data.image)
                window.localStorage.setItem("username", response.data.username)
                toast.success(response.data.message)
                
                this.closeEditProfileModal()
            }

        }).catch(error => {
            console.log(error)
        })

    }

    deleteConfirm(id){
        this.setState({ show: true, carId: id })
    }

    edit(id){

        this.fetchBrands()
        this.setState({
            editId: id
        })
        axios.get(process.env.REACT_APP_API_URL+"/cars/edit/"+id).then(response => {
            //console.log("edit")

            console.log(response)

            var foundBrand = null
            var foundModel = null
            this.openEditModal()    
            
            let brand = response.data.car[0].model.brand.id
            let model = response.data.car[0].model.id

            if(response.data.images[0]){
                this.setState({
                    file2EditImage: response.data.images[0].image
                })
            }

            if(response.data.images[1]){
                this.setState({
                    file3EditImage: response.data.images[1].image
                })
            }

            if(response.data.images[2]){
                this.setState({
                    file4EditImage: response.data.images[2].image
                })
            }


            foundBrand = this.state.brands.find((element) => {
                if(element.value === brand){
                    return element
                }
            })

            this.setState({
                choosenEditBrand: foundBrand,
                priceEdit: response.data.car[0].price,
                descriptionEdit: response.data.car[0].description,
                file1EditImage: response.data.car[0].image
            })

            this.fetchModelEdit(brand).then(response => {
                
                this.setState({
                    models: response.data
                })

                foundModel = this.state.models.find((element) => {
                
                    if(element.value === model){
                        return element
                    }
    
                })

                this.setState({
                    choosenEditModel: foundModel
                })

            })
            

        }).catch(error =>{

        })
    }

    countFavorites(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/favorite/count", config).then(response => {
            
            this.setState({
                favoritesCount: response.data.message['count(*)']
            })

        }).catch(error => {

        })

    }

    countNotifications(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/notification/count", config).then(response => {
            
            this.setState({
                notificationsCount: response.data.sales[0]['count(*)']
            })

        }).catch(error => {

        })

    }

    countSales(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/sales/user/count",config).then(response => {
            
            this.setState({
                countSales: response.data.salesCount[0]['count(*)']
            })

        }).catch(error => {

        })

    }

    countBuy(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/buy/user/count",config).then(response => {
            
            this.setState({
                countBuy: response.data.salesCount[0]['count(*)']
            })

        }).catch(error => {

        })

    }

	render() {

        let imageEdit1
        let imageEdit2
        let imageEdit3
        let imageEdit4

        if(this.state.file1EditImage){
            imageEdit1 = <img src={process.env.REACT_APP_SERVER_URL+"/"+this.state.file1EditImage} className="responsive-img card-img"/>
        }

        if(this.state.file2EditImage){
            imageEdit2 = <img src={process.env.REACT_APP_SERVER_URL+"/"+this.state.file2EditImage} className="responsive-img card-img"/>
        }

        if(this.state.file3EditImage){
            imageEdit3 = <img src={process.env.REACT_APP_SERVER_URL+"/"+this.state.file3EditImage} className="responsive-img card-img"/>
        }

        if(this.state.file4EditImage){
            imageEdit4 = <img src={process.env.REACT_APP_SERVER_URL+"/"+this.state.file4EditImage} className="responsive-img card-img"/>
        }

		return (
			<div className="App">
				<NavbarLanding/>	
				<section className="section-padding no-top gray">
            
                    <div className="container">
              
                        <div className="row">
                 
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                <section className="search-result-item">
                                    <a className="image-link" href="#"><img className="image center-block" alt="" src={process.env.REACT_APP_SERVER_URL+"/"+window.localStorage.getItem("image")} /> </a>
                                    <div className="search-result-item-body">
                                        <div className="row">
                                            <div className="col-md-5 col-sm-12 col-xs-12">
                                                <h4 className="search-result-item-heading"><a href="#">{window.localStorage.getItem('username')}</a></h4>
                                                <p className="info">
                                                    <span><a href="profile.html"><i className="fa fa-user "></i>Profile </a></span>
                                                    <span><a href="#" onClick={() => this.openEditProfileModal()}><i className="fa fa-edit"></i>Edit Profile </a></span>
                                                </p>
                                                <p className="description">You last logged in at: 14-01-2017 6:40 AM [ USA time (GMT + 6:00hrs)</p>
                                                <span className="label label-warning">Paid Package</span>
                                                <span className="label label-success">Dealer</span>
                                            </div>
                                            <div className="col-md-7 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="user-stats">
                                                            <button className="btn btn-success" onClick={() => this.openModal()}>Nueva publicación</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row ad-history">
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <Link to="/favorites">
                                                            <div className="user-stats">
                                                                <h2>{this.state.favoritesCount}</h2>
                                                                <small>Favoritos</small>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <Link to="/dashboard/notifications">
                                                            <div className="user-stats">
                                                                <h2>{this.state.notificationsCount}</h2>
                                                                <small>Notificaciones</small>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <Link to="/dashboard/user/bought-cars">
                                                            <div className="user-stats">
                                                                <h2>{this.state.countBuy}</h2>
                                                                <small>Compras</small>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <Link to="/dashboard/user/sold-cars">
                                                            <div className="user-stats" style={{background: "#1abc9c"}}>
                                                                <h2>{this.state.countSales}</h2>
                                                                <small>Ventas</small>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    {/*
                                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                                        <div className="user-stats">
                                                            <h2>413</h2>
                                                            <small>Favourites Ads</small>
                                                        </div>
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                
                            </div> 
                        </div>
              
                        <div className="row grid-style-2 ">
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                {this.state.cars.map((car, i) =>
                                    <div className="col-md-4" key={i}>
                                        <div className="category-grid-box-1">
                                            <div className="image">
                                                <img alt="Carspot" src={process.env.REACT_APP_SERVER_URL+"/"+car.image} className="img-responsive card-img" />
                                                <div className="ribbon popular"></div>
                                                <div className="price-tag">
                                                    <div className="price"><span>${car.price}</span></div>
                                                </div>
                                            </div>
                                            <div className="short-description-1 clearfix">
                                                {/*<div className="category-title"> <span><a href="#">Car & Bikes</a></span> </div>*/}
                                                <h3><a title="" href="single-page-listing.html">{car.model.brand.brand}</a></h3>
                                                <p className="location"><i className="fa fa-map-marker"></i>{car.model.model}</p>
                                                {/*<ul className="list-unstyled">
                                                    <li><a href="javascript:void(0)"><i className="flaticon-gas-station-1"></i>Diesel</a></li>
                                                    <li><a href="javascript:void(0)"><i className="flaticon-dashboard"></i>35,000 km</a></li>
                                                    <li><a href="javascript:void(0)"><i className="flaticon-engine-2"></i>1800 cc</a></li>
                                                    <li><a href="javascript:void(0)"><i className="flaticon-car-2"></i>SUV</a></li>
                                                    <li><a href="javascript:void(0)"><i className="flaticon-cogwheel-outline"></i>White</a></li>
                                                </ul>*/}
                                            </div>
                                            <div className="ad-info-1">
                                                <p><i className="flaticon-calendar"></i> &nbsp;<span><Moment locale="es" fromNow>{car.created_at}</Moment></span> </p>
                                                <ul className="pull-right">
                                                    <li> <a href="#" onClick={() => this.deleteConfirm(car.id)}><i className="fa fa-trash"></i></a> </li>
                                                    <li> <a href="#" onClick={() => this.edit(car.id)}><i className="fa fa-edit"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
            
                </section>
                <FooterLanding />

                <div className="dashboard-create-modal" id="dashboard-create-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="modal-content">
                                    <div className="modal-header rte">
                                        <h2 className="modal-title">Publicar vehiculo</h2>
                                    </div>
                                    <form>

                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Marcas</label>
                                                        <Select options={this.state.brands} value={this.state.choosenBrand} onChange={this.handleBrandChange}/>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Modelos</label>
                                                        <Select options={this.state.models} value={this.state.choosenModel} onChange={this.handleModelChange}/>
                                                    </div>
                                                   
                                                </div>

                                                <div className="col-md-12">
                                                    
                                                    <div className="form-group">
                                                        <label>Descripción</label>
                                                        <textarea className="form-control" onChange={this.onFieldChange('description').bind(this)} value={this.state.decription}></textarea>
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen Principal</label>
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile1Change(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 2</label>
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile2Change(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 3</label>
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile3Change(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 4</label>
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile4Change(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Precio</label>
                                                        <input type="text" className="form-control" onChange={this.onFieldChange('price').bind(this)} value={this.state.price}/>
                                                    </div>
                                                   
                                                </div>
                                                <div className="col-md-12">
                                                    
                                                    <p className="text-center">
                                                        <button className="btn btn-success" type="button" onClick={() => this.publish()}>
                                                            Publicar
                                                        </button>
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" onClick={() => this.closeModal()}>Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="dashboard-create-modal" id="dashboard-edit-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="modal-content">
                                    <div className="modal-header rte">
                                        <h2 className="modal-title">Editar vehiculo</h2>
                                    </div>
                                    <form>

                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Marcas</label>
                                                        <Select options={this.state.brands} value={this.state.choosenEditBrand} onChange={this.handleBrandChangeEdit}/>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Modelos</label>
                                                        <Select options={this.state.models} value={this.state.choosenEditModel} onChange={this.handleModelChangeEdit}/>
                                                    </div>
                                                   
                                                </div>

                                                <div className="col-md-12">
                                                    
                                                    <div className="form-group">
                                                        <label>Descripción</label>
                                                        <textarea className="form-control" onChange={this.onFieldChange('descriptionEdit').bind(this)} value={this.state.descriptionEdit}></textarea>
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen Principal</label>
                                                        <div>
                                                            {imageEdit1}
                                                            <input className="form-control" type="file" onChange={ (e) => this.handleFile1ChangeEdit(e.target.files[0]) }/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 2</label>
                                                        {imageEdit2}
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile2ChangeEdit(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 3</label>
                                                        {imageEdit3}
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile3ChangeEdit(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Imagen 4</label>
                                                        {imageEdit4}
                                                        <input className="form-control" type="file" onChange={ (e) => this.handleFile4ChangeEdit(e.target.files[0]) }/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    
                                                    <div className="form-group">
                                                        <label>Precio</label>
                                                        <input type="text" className="form-control" onChange={this.onFieldChange('priceEdit').bind(this)} value={this.state.priceEdit}/>
                                                    </div>
                                                   
                                                </div>
                                                <div className="col-md-12">
                                                    
                                                    <p className="text-center">
                                                        <button className="btn btn-success" type="button" onClick={() => this.update()}>
                                                            Publicar
                                                        </button>
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" onClick={() => this.closeEditModal()}>Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-create-modal" id="dashboard-edit-profile-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="modal-content">
                                    <div className="modal-header rte">
                                        <h2 className="modal-title">Editar Perfil</h2>
                                    </div>
                                    <form>

                                        <div className="container-fluid">
                                            <div className="row">
                                                
                                            <div className="col-md-6 offset-md-3">
                                                <div className="form-group">
                                                    <img className="responsive-img" src={process.env.REACT_APP_SERVER_URL+"/"+window.localStorage.getItem('image')}/>
                                                    <label>Imagen</label>
                                                    <input type="file" className="form-control" onChange={ (e) => this.handleFileProfileChangeEdit(e.target.files[0]) }/>
                                                </div>
                                            </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Nombre</label>
                                                        <input type="text" className="form-control" onChange={this.onFieldChange('username').bind(this)} value={this.state.username}/>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    
                                                    <div className="form-group">
                                                        <label>Teléfono</label>
                                                        <input type="text" className="form-control" onChange={this.onFieldChange('phone').bind(this)} value={this.state.phone}/>
                                                    </div>
                                                   
                                                </div>
                                                <div className="col-md-12">
                                                    
                                                    <p className="text-center">
                                                        <button className="btn btn-success" type="button" onClick={() => this.updateProfile()}>
                                                            Publicar
                                                        </button>
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" onClick={() => this.closeEditProfileModal()}>Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
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
                <SweetAlert
                    show={this.state.show}
                    title="¿Está seguro?"
                    text="Eliminarás la publicación"
                    showCancelButton
                    onConfirm={() => {

                        let config = {
                            headers: {
                                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
                            }
                        }

                        axios.post(process.env.REACT_APP_API_URL+"/cars/delete", {carId: this.state.carId}, config).then(response => {

                            toast.success(response.data.message)
                            this.fetchCars()

                        }).catch(error => {

                        })
                        this.setState({ show: false });
                    }}
                    onCancel={() => {
                        console.log('cancel'); // eslint-disable-line no-console
                        this.setState({ show: false });
                    }}
                    onClose={() => console.log('close')} // eslint-disable-line no-console
                />

                <SweetAlert
                    show={this.state.showDeleteImage}
                    title="¿Está seguro?"
                    text="Eliminarás la imagen"
                    showCancelButton
                    onConfirm={() => {

                        this.deleteImage(this.state.imageDelete)
                        this.setState({ showDeleteImage: false });
                    }}
                    onCancel={() => {
                        console.log('cancel'); // eslint-disable-line no-console
                        this.setState({ showDeleteImage: false });
                    }}
                    onClose={() => console.log('close')} // eslint-disable-line no-console
                />

			</div>
		);
	}
}

export default Dashboard;