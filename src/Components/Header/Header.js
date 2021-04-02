import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [,,loggedInUser,] = useContext(UserContext)
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    {/* <Navbar.Brand to="/home"><div class="container-fluid"> */}
                        <h3 class="navbar-brand" >
                           
                                Oraganic Mart
                        </h3>
                    
                {/* <nav class="navbar navbar-light bg-light">
                    
                    </nav> */}


                    <Nav className="mx-auto" inline>
                        <Link class="mx-2 text-dark" to="/home">Home</Link>
                        <Link class="mx-2 text-dark" to="/deal">Deals</Link>
                        <Link class="mx-2 text-dark" to="/order">Orders</Link>
                        <Link class="mx-2 text-dark" to="/admin">Admin</Link>
                        
                        <Link class="mx-2 text-dark" to="/login">{(loggedInUser.email)?(loggedInUser.displayName):'Login'}</Link>
                    </Nav> 
                   
                </Navbar>
            </>
        </div>
    );
};

export default Header;