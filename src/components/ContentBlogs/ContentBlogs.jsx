import React from "react";

import PostWidget from "components/PostWidget";
import BreadCrumbs from "components/BreadCrumbs";
import PageTitle from "components/PageTitle";
import PagesPanel from "components/PagesPanel";
import BlogsWidgetContainer from "containers/BlogsWidgetContainer";

import './ContentBlogs.css';

export default class ContentBlogs extends React.PureComponent {
    render() {
        return (
            <div className="ContentBlogs">
                <h1>Blogs</h1>
                <BlogsWidgetContainer />
            </div>
        );
    }
}

{/*
<PostWidget title={"ret"} text={"jsdhkjfksdkfhkjsadhfjkiu3hfukhsadkjfjkasdkhfkjhjkasdkjfjksadhkfhak"}/>
<PostWidget/>
<PostWidget/>*/}
