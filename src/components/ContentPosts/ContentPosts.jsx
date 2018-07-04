import React from "react";

import PostWidget from "components/PostWidget";
import BreadCrumbs from "components/BreadCrumbs";
import PageTitle from "components/PageTitle";
import PagesPanel from "components/PagesPanel";
import PostWidgetContainer from "containers/PostWidgetContainer";

import './ContentPosts.css';

export default class ContentPosts extends React.PureComponent {
    render() {
        return (
            <div className="content">
                <BreadCrumbs/>
                <h1>Posts</h1>
                <PostWidgetContainer/>
            </div>
        );
    }
}

{/*
<PostWidget title={"ret"} text={"jsdhkjfksdkfhkjsadhfjkiu3hfukhsadkjfjkasdkhfkjhjkasdkjfjksadhkfhak"}/>
<PostWidget/>
<PostWidget/>*/}
