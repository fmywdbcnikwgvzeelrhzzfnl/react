import React from "react";

import Header from 'components/Header';
import BodyPost from 'components/BodyPost';
import Footer from 'components/Footer';

import './PagePost.css';

export default class PagePost extends React.PureComponent {

    render() {
        const {match} = this.props;
        console.log(match.params);

        return (
            <div className="container PagePost">
                <Header/>
                <BodyPost/>
                <Footer/>
            </div>
        );
    }
}