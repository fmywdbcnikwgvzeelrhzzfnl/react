import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './CategoriesWidget.css';

export default class CategoriesWidget extends React.PureComponent {
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
            <div className="widget">
                <Card>
                    <CardHeader>Categories</CardHeader>
                    <CardBody>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">HTML</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">CSS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">PHP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">React</NavLink>
                            </NavItem>
                        </Nav>
                    </CardBody>
                </Card>
            </div>
        );
    }
}