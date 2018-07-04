import React from "react";

import Content from "components/ContentPosts";
import RightPanel from "components/RightPanel";
import BreadCrumbs from "components/BreadCrumbs";

import './BodyPosts.css';

export default class BodyPosts extends React.PureComponent {
    render() {
        //let items = this.props.items;
        return (
            <div className="BodyPosts">
                <Content/>
                <RightPanel/>
            </div>
        );
    }
}