import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './Post.css';

/**
 * Представление поста, для страницы Пост
 * Название, картинка и полный текст
 */
export default class Post extends React.PureComponent {
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
        const {title, text} = this.props;
        return (
            <div className="post">
                <Card>
                    <CardBody>
                        <CardTitle className="postTitle">{title}</CardTitle>
                        Posted on June 6, 2018 by <a href="#">Me</a>
                        <br/><br/>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=600&h=180"
                                 alt="Card image cap"/>
                        <CardText>
                            {text}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}