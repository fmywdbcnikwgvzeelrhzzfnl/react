import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import ButtonLogin from "components/ButtonLogin";

import Logo from './logo.png';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header className="header">
                <Navbar color="dark" expand="md" dark>
                    <NavbarBrand href="#">
                        <img src={Logo} width="50px"/> React & Bootstrap blog
                    </NavbarBrand>
                    <NavbarToggler  onClick={this.toggle} color="warning"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contacts</NavLink>
                            </NavItem>
                            <NavItem>
                                <ButtonLogin/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}