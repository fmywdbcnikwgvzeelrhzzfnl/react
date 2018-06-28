import React from "react";

import Header from 'components/Header';
import BodyPost from 'components/BodyPost';
import Footer from 'components/Footer';

import './PagePost.css';

export default class PagePost extends React.PureComponent {

    render() {
        const {match} = this.props;
        const id=match.params.id;

        return (
            <div className="container PagePost">
                <Header/>
                <BodyPost id={id}/>
                <Footer/>
            </div>
        );
    }
}