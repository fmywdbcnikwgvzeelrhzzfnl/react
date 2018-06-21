import React from "react";
import {Fragment} from 'react';

import './SearchWidget.css';

export default class SearchWidget extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}