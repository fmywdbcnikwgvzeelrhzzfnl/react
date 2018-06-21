import React from "react";
import {Fragment} from 'react';

import './CategoriesWidget.css';

export default class CategoriesWidget extends React.Component {
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
                <div>
                    CATEGORY
                </div>
            </Fragment>
        );
    }
}