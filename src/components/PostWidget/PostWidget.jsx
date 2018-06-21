import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './PostWidget.css';

export default class PostWidget extends React.Component {
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
            <div className="postWidget">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=600&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Post title</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus, error ipsa possimus sint suscipit ullam? Architecto asperiores at consequuntur deleniti, dolorem explicabo, ipsa maiores nam neque nulla quam totam.
                        </CardText>
                        <Button color="primary">Read More ..</Button>
                    </CardBody>
                    <CardFooter className="text-muted">
                        Posted on June 6, 2018 by Me
                    </CardFooter>
                </Card>
            </div>
        );
    }
}