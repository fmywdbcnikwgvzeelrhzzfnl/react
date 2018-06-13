import React from "react";
import '../css/Body.css';
import Menu from "../jsx/Menu.jsx";
import Content from "../jsx/Content.jsx";

export default class Body extends React.Component {
    render() {
        let items=this.props.items;
        return (
            <div className="body">
                <Menu type="left" items={items}/>
                <Content/>
                <Menu type="right" items={items}/>
            </div>
        );
    }
}