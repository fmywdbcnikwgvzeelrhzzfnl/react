import React from "react";
import {Fragment} from 'react';

import './RightPanel.css';

export default class RightPanel extends React.Component {
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