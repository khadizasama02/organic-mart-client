// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import ManageProduct from './Components/ManageProduct/ManageProduct';



export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://stormy-citadel-42524.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
       
  },[])
 
  return (
    <UserContext.Provider value ={[products,setProducts,loggedInUser,setLoggedInUser]}>
     
    
    <div class="container">
    <Router >
      <Header/>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <PrivateRoute path="/order">
        <Order/>
        </PrivateRoute>
        <PrivateRoute path="/admin">
        <Admin/>
        </PrivateRoute>
        <PrivateRoute path="/deal">
        <Deals/>
        </PrivateRoute>
        <Route path="/login">
        <Login/>
        </Route>
        <PrivateRoute path="/checkout/:_id">
        <CheckOut/>
        </PrivateRoute>
        <Route path="/manageProduct">
        <ManageProduct/>
        </Route>
      </Switch>
    </Router>
    {/* // </Container> */}
    </div>
    </UserContext.Provider>
  );
}

export default App;
