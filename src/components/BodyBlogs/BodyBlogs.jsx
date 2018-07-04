import React from "react";

import ContentBlogs from "components/ContentBlogs";

import './BodyBlogs.css';

export default class BodyBlogs extends React.PureComponent {
    render() {
        //let items = this.props.items;
        return (
            <div className="BodyBlogs">
                <ContentBlogs/>
            </div>
        );
    }
}