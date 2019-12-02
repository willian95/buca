import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import Favorites from './components/Favorites/Favorites';
import PasswordRecover from './components/PasswordRecover/PasswordRecover';
import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props)

    this.verify = this.verify.bind(this)

  }

  verify(){
        
    return new Promise(function(resolve, reject){

        let config = {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        }
          
        axios.get(process.env.REACT_APP_API_URL+"/verify", config).then(response => {
          resolve(response);
        }).catch(error => {
          reject(403);
        })
      
    })
  }

  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/">
            <Landing verify={this.verify} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard verify={this.verify}/>
          </Route>
          <Route path="/password/recovery/:token" component={PasswordRecover}>
          </Route>
          <Route path="/car/:id" component={Details}>
          </Route>
          <Route path="/search" component={Search}>
          </Route>
          <Route path="/favorites" component={Favorites}>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
