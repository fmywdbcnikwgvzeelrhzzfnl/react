import React from "react";

import Header from 'components/Header';
import BodyBlogs from 'components/BodyBlogs';
import Footer from 'components/Footer';
import BreadCrumbs from "components/BreadCrumbs";

import './PageBlogs.css';

export default class PageBlogs extends React.PureComponent {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <BreadCrumbs/>
                <BodyBlogs/>
                <Footer/>
            </div>
        );
    }
}