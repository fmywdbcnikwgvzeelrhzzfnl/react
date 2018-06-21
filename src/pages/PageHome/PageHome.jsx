import React from "react";
import './PageHome.css';

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';

export default class PagesHome extends React.Component {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}