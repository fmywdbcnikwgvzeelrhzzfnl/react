import React from "react";
import './Content.css';
import {Table} from 'reactstrap';
import PostWidget from "components/PostWidget";
import BreadCrumbs from "components/BreadCrumbs";
import PageTitle from "components/PageTitle/PageTitle";

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <BreadCrumbs/>
                <PageTitle/>
                <PostWidget/>
                <PostWidget/>
                <PostWidget/>
            </div>
        );
    }
}