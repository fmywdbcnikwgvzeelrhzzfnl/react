import React from "react";
import {Fragment} from "react";

import PostList from "components/PostList/PostList";
import BlogsList from "components/BlogsList/BlogsList";

export default class PostWidgetContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    downloadPage = () => {
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => {
                this.setState({users});
            });
    };

    componentDidMount() {
        this.downloadPage();
    }

    render() {
        return (
            <Fragment>
                <BlogsList users={this.state.users} downloadPage={this.downloadPage}/>
            </Fragment>
        );
    }
}