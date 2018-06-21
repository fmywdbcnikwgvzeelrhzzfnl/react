import React from "react";
import './Body.css';
import Content from "components/Content";
import RightPanel from "components/RightPanel";

export default class Body extends React.Component {
    render() {
        let items=this.props.items;
        return (
            <div className="body">
                <Content/>
                <RightPanel/>
            </div>
        );
    }
}