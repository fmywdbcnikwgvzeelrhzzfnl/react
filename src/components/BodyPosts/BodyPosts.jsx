import React from "react";

import Content from "components/Content";
import RightPanel from "components/RightPanel";
import BreadCrumbs from "components/BreadCrumbs";

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

        /*return (
            <div className="BodyAbout">
                <BreadCrumbs />
                <p>
                    Этот движок для сайта с блогами написан в учебных целях с использованием технологий npm, webpack, react, bootstrap, css, redux.
                </p>
            </div>
        );*/
    }
}