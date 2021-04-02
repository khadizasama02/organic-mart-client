import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [,,loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/home"><div class="container-fluid">
                        <a class="navbar-brand" href="#">
                           
                                Oraganic Mart
                        </a>
                    </div></Navbar.Brand>
                {/* <nav class="navbar navbar-light bg-light">
                    
                    </nav> */}


                    <Nav className="mx-auto" inline>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/deal">Deals</Nav.Link>
                        <Nav.Link href="/login">{(loggedInUser.email)?(loggedInUser.displayName):'Login'}</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/order">Orders</Nav.Link>
                    </Nav> 
                   
                </Navbar>
            </>
        </div>
    );
};

export default Header;