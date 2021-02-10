import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <div className="container-fluid">
                    <NavbarBrand href="/">MOVIEDB</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>Movies</NavLink>
                            </NavItem>
                        </Nav>
                        <NavItem>
                            <NavLink>APIS USED</NavLink>
                        </NavItem>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;