import React from "react";
import {Fragment} from 'react';
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './SearchWidget.css';

export default class SearchWidget extends React.Component {
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
                    <CardHeader>Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input placeholder="Search for..."/>
                            <Button className="btn">Go!</Button>
                        </InputGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
}