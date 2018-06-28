import React from "react";

import Content from "components/Content";
import RightPanel from "components/RightPanel";

import './BodyHome.css';

export default class BodyHome extends React.PureComponent {
    render() {
        //let items = this.props.items;
        return (
            <div className="BodyHome">
                <Content/>
                <RightPanel/>
            </div>
        );
    }
}