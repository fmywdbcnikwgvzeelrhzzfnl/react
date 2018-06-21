import React from "react";
import './PageHome.css';

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

export default class Menu extends React.Component {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <Menu type="top" items={menu_items}/>
                <Body items={menu_items}/>
                <Footer/>
            </div>
        );
    }
}