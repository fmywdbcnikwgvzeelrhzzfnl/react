import React from "react";

import Header from 'components/Header';
import BodyHome from 'components/BodyHome';
import Footer from 'components/Footer';

import './PageHome.css';

export default class PageHome extends React.PureComponent {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <BodyHome/>
                <Footer/>
            </div>
        );
    }
}