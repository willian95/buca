import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Notifications from './components/Dashboard/Notifications';
import Details from './components/Details/Details';
import Admin from './components/Admin/Admin';
import UserAdminInfo from './components/Admin/UserAdminInfo'
import SoldCars from './components/Admin/SoldCars'
import UserSoldCars from './components/Dashboard/UserSoldCars'
import UserBoughtCars from './components/Dashboard/UserBoughtCars'
import BoughtCars from './components/Admin/BoughtCars'
import RejectedSales from './components/Admin/RejectedSales'
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
          <Route exact path="/dashboard/notifications" component={Notifications}>
          </Route>
          <Route exact path="/dashboard/user/sold-cars" component={UserSoldCars}></Route>
          <Route exact path="/dashboard/user/bought-cars" component={UserBoughtCars}></Route>
          <Route exact path="/password/recovery/:token" component={PasswordRecover}>
          </Route>
          <Route exact path="/car/:id" component={Details}>
          </Route>
          <Route exact path="/search" component={Search}>
          </Route>
          <Route exact path="/favorites" component={Favorites}>
          </Route>
          <Route exact path="/admin" component={Admin}>
          </Route>
          <Route exact path="/admin/user/:user_id" component={UserAdminInfo}></Route>
          <Route exact path="/admin/user/sold-cars/:user_id" component={SoldCars}></Route>
          <Route exact path="/admin/user/bought-cars/:user_id" component={BoughtCars}></Route>
          <Route exact path="/admin/user/rejected-sales/:user_id" component={RejectedSales}></Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
