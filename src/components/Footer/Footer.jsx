import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Navbar color="dark" expand="md" dark>
                    <NavbarBrand href="#">Copyright 2018</NavbarBrand>
                </Navbar>
            </footer>
        );
    }
}