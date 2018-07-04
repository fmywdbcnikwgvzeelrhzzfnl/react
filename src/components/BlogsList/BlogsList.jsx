import React from "react";
import {Fragment} from "react";

import BlogWidget from "components/BlogWidget";

import './BlogsList.css';

/**
 * Список блогов
 */
export default class BlogsList extends React.PureComponent {
    render() {
        const {users} = this.props;
        console.log(users);
        return (
            <div className="BlogsList">
                {users.map(user => <BlogWidget key={user.id} id={user.id} name={user.name}/>)}
            </div>
        );
    }
}