import React from "react";
import './Body.css';
import Menu from "components/Menu";
import Content from "components/Content";

export default class Body extends React.Component {
    render() {
        let items=this.props.items;
        return (
            <div className="body">
                <Content/>
                <Menu type="right" items={items}/>
            </div>
        );
    }
}