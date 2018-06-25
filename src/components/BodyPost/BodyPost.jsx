import React from "react";

import ContentPost from "components/ContentPost";
import RightPanel from "components/RightPanel";

import './BodyPost.css';

export default class BodyPost extends React.PureComponent {
    render() {
        //let items = this.props.items;
        return (
            <div className="BodyPost">
                <ContentPost/>
            </div>
        );
    }
}