import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Card from './Card'


class LatestPosts extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts:[],
            carId:0
        }

        this.fetchCars = this.fetchCars.bind(this)
        this.showDetails = this.showDetails.bind(this)

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
           
            this.setState({
                posts: response.data
            })

        }).catch(error => {

        })

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
            <div id="latest-posts">
                <section className="custom-padding gray">
				
                    <div className="container">
                
                        <div className="row">
                    
                            <div className="heading-panel">
                                <div className="col-xs-12 col-md-12 col-sm-12 left-side">
                                    <h1>Ultimas <span className="heading-color"> Publicaciones</span></h1>
                                </div>
                            </div>
                    
                            <div className="row grid-style-2 ">
                                <div className="col-md-12 col-xs-12 col-sm-12">
                            
                                    {this.state.posts.map((car, i) =>
                                        <Card key={i} favorite={car.favorites} car_id={car.id} brand={car.model.brand.brand} model={car.model.model} price={car.price} image={car.image} publish_date={car.created_at}/>
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

export default LatestPosts;