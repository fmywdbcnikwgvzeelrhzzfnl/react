import React from "react";

import SearchWidget from "components/SearchWidget";
import CategoriesWidget from "components/CategoriesWidget";
import TextWidget from "components/TextWidget";

import './RightPanel.css';

export default class RightPanel extends React.PureComponent {
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
            <div className="rightPanel">
                <SearchWidget />
                <CategoriesWidget />
                <TextWidget />
            </div>
        );
    }
}