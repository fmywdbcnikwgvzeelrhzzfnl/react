import React from "react";
import './ContentPost.css';
import {Table} from 'reactstrap';
import Post from "components/Post";
import BreadCrumbs from "components/BreadCrumbs";
import PageTitle from "components/PageTitle";
import PagesPanel from "components/PagesPanel";
import PostContainer from "containers/PostContainer";

export default class ContentPost extends React.PureComponent {
    render() {
        const {id}=this.props;

        return (
            <div className="ContentPost">
                <BreadCrumbs/>
                <PostContainer id={id}/>
            </div>
        );
    }
}