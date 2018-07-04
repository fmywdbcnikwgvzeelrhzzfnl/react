import React from "react";

import Content from "components/ContentPosts";
import RightPanel from "components/RightPanel";
import BreadCrumbs from "components/BreadCrumbs";

import './BodyHome.css';

export default class BodyHome extends React.PureComponent {
    render() {
        //let items = this.props.items;

        return (
            <div className="BodyHome">
                <div>
                    Этот движок для сайта с блогами написан в учебных целях с использованием технологий npm, webpack,
                    react, bootstrap, css, redux.
                </div>
                <div>
                    На странице Blogs размещены все блоги, а на странице Posts размещены посты с возможностью отбора по категориям.
                </div>
            </div>
        );
    }
}