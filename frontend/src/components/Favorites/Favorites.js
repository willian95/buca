import React, { Component } from 'react';
import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import Card from '../Landing/partials/Card'
import axios from 'axios'

class Favorites extends Component {

    constructor(props){
        super(props)

        this.state ={
            cars:[]
        }

        this.fetchFavorites = this.fetchFavorites.bind(this)
        this.hideCar = this.hideCar.bind(this)
    }

    componentDidMount(){
        this.fetchFavorites()
    }

    hideCar(){
        console.log('hey')
    }

    fetchFavorites(){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            }
        }

        axios.get(process.env.REACT_APP_API_URL+"/favorite/fetch", config).then(response => {
            
            this.setState({
                cars: response.data.data
            })

        }).catch(error => {

        })

    }

    render() {
        return (
            <div id="favorites">
            	<NavbarLanding></NavbarLanding>

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
                            
									{this.state.cars.map((car, i) =>
										<Card id={"favorite-car-"+car.car_id} key={i} favorite={1} car_id={car.car_id} brand={car.car.model.brand.brand} model={car.car.model.model} price={car.car.price} image={car.car.image} hideOnUnfavorite={true}/>
									)}
                        
                            	</div>
                        	</div>   
						</div>
					</div>
				</section>

                <FooterLanding></FooterLanding>
          	</div>
        );
    }
}

export default Favorites;