import React from "react";
import {Fragment} from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './PostList.css';
import PostWidget from "components/PostWidget/PostWidget";

export default class PostList extends React.PureComponent {
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
        const posts = this.props;
        return (
            <Fragment>
                {posts.map(post => <PostWidget title={post.title} text={post.body}/>)}
            </Fragment>
        );
    }
}