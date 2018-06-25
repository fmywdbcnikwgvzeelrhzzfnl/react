import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './TextWidget.css';

export default class TextWidget extends React.PureComponent {
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
                    <CardHeader>Text widget</CardHeader>
                    <CardBody>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam at
                            corporis ducimus eligendi eos error eum harum, ipsam, laudantium magni necessitatibus nisi
                            officiis placeat quae quas sapiente veritatis voluptates?
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}