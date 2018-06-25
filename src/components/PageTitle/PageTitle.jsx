import React from "react";
import './PageTitle.css';

export default class PageTitle extends React.PureComponent {
    render() {
        return (
            <div className="postTitle">
                <h1>Page title</h1>
            </div>
        );
    }
}