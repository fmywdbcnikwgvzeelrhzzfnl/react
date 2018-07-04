import React from "react";

import Header from 'components/Header';
import BodyPosts from 'components/BodyPosts';
import Footer from 'components/Footer';
import BreadCrumbs from "components/BreadCrumbs";

import './PagePosts.css';

export default class PagePosts extends React.PureComponent {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <BodyPosts/>
                <Footer/>
            </div>
        );
    }
}