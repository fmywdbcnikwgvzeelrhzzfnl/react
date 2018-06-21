import React from "react";
import './PageHome.css';

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

export default class PagesHome extends React.Component {

    render() {
        const menu_items = this.props.items;
        return (
            <div className="container">
                <Header/>
                <Body items={[{title: "one", link: "#"}]}/>
                <Footer/>

            </div>
        );
    }
}