import React from "react";
import './Content.css';
import {Table} from 'reactstrap';
import PostWidget from "components/PostWidget";
import BreadCrumbs from "components/BreadCrumbs";
import PageTitle from "components/PageTitle";
import PagesPanel from "components/PagesPanel";

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <BreadCrumbs/>
                <PageTitle/>
                <PagesPanel/>
                <PostWidget/>
                <PostWidget/>
                <PostWidget/>
                <PagesPanel/>
            </div>
        );
    }
}