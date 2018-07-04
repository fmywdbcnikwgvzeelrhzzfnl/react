import React from "react";
import {Fragment} from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './PostList.css';
import PostWidget from "components/PostWidget";
import PagesPanel from "components/PagesPanel";

/**
 * Список постов
 */
export default class PostList extends React.PureComponent {
    render() {
        const {posts, page, totalPages, downloadPage} = this.props;
        //console.log("BlogsList:"+posts);
        return (
            <Fragment>
                {posts.map(post => <PostWidget key={post.id} id={post.id} title={post.title} text={post.body}/>)}
                <PagesPanel page={page} totalPages={totalPages} downloadPage={downloadPage}/>
            </Fragment>
        );
    }
}