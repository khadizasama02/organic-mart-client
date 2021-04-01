import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/home"><div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="../../photo/LOGO.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                                Oraganic Mart
                        </a>
                    </div></Navbar.Brand>
                {/* <nav class="navbar navbar-light bg-light">
                    
                    </nav> */}


                    <Nav className="mx-auto" inline>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/deal">Deals</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/order">Orders</Nav.Link>
                    </Nav> 
                   
                </Navbar>
            </>
        </div>
    );
};

export default Header;