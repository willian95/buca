import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div id="banner">
            	<div className="container">
                	<div className="search-container">
                  		<h2>What are you looking for ?</h2>
						<p>Search <strong>267,241</strong> new ads -<strong> 83 </strong> added today</p>
                  		<a className="btn btn-theme">Post Your Ad</a>
					</div>
            	</div>
          	</div>
        );
    }
}

export default Banner;