import React from "react";

import Header from 'components/Header';
import BodyHome from 'components/BodyHome';
import Footer from 'components/Footer';
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";

import './PageHome.css';


export default class PageHome extends React.PureComponent {

    render() {
        return (
            <div className="container">
                <Header/>
                <BreadCrumbs/>
                <BodyHome/>
                <Footer/>
            </div>
        );
    }
}