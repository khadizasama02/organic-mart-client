// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';



export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
      <h1>name:{loggedInUser.displayName}</h1>
    
    <div class="container">
    <Router >
      <Header/>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/order">
        <Order/>
        </Route>
        <Route path="/admin">
        <Admin/>
        </Route>
        <Route path="/deal">
        <Deals/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/home">
        <Home/>
        </Route>
      </Switch>
    </Router>
    {/* // </Container> */}
    </div>
    </UserContext.Provider>
  );
}

export default App;
