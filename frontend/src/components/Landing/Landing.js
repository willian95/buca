import React, { Component } from 'react';

import NavbarLanding from '../Partials/NavbarLanding'
import FooterLanding from '../Partials/FooterLanding'
import Banner from './partials/Banner'
import AdvancedSearch from './partials/AdvancedSearch'
import Service from './partials/Service'
import LatestPosts from './partials/LatestPosts'

const URL = 'ws://localhost:3333'

class Landing extends Component {

	constructor(props){
		super(props)

		this.state = {
			auth:false
		}

	}

	componentDidMount(){

        this.props.verify().then(response => {

            this.setState({
                auth: true
			})

        }).catch(error => {
            this.setState({
                auth: false
            })
		})

    
	}

	render() {
		return (
			<div className="App">
				<NavbarLanding/>	
				<Banner />
				<AdvancedSearch />
				<Service />
				<LatestPosts />
				<FooterLanding />
			</div>
		);
	}
}

export default Landing;