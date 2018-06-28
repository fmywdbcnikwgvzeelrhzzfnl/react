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
import {Link} from 'react-router-dom';

import ButtonLogin from "components/ButtonLogin";

import Logo from './logo.png';
import './Header.css';

const menu = [
    {id: 1, title: "Home", link: "/"},
    {id: 2, title: "Posts", link: "/post"},
    {id: 3, title: "Users", link: "#"},
    {id: 4, title: "Comments", link: "#"},
    {id: 5, title: "About", link: "#"},
];

export default class Header extends React.PureComponent {
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
                    <NavbarToggler onClick={this.toggle} color="warning"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                menu.map((item) =>
                                    <NavItem>
                                        <Link to={item.link}>
                                            <NavLink key={item.id}>
                                                {item.title}
                                            </NavLink>
                                        </Link>
                                    </NavItem>
                                )
                            }
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