import React from "react";
import {Fragment} from 'react';

import './TextWidget.css';

export default class TextWidget extends React.Component {
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