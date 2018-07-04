import React from "react";
import {Fragment} from "react";

import PostList from "components/PostList/PostList";

export default class PostWidgetContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            totalPages: 10,
            page: 1,
            posts: []
        };
    }

    /**
     * Загрузка страницы по номеру, изменение текущего состояния. Используется кнопками пагинации и здесь
     * @param page
     */
    downloadPage = (page) => {
        fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            .then(response => response.json())
            .then(posts => {
                this.setState({'page': page, posts});
                //console.log("Container:"+this.state.posts);
            });
    };

    componentDidMount() {
        this.downloadPage(this.state.page);
    }

    render() {
        return (
            <Fragment>
                <PostList posts={this.state.posts} page={this.state.page} totalPages={this.state.totalPages}
                          downloadPage={this.downloadPage}/>
            </Fragment>
        );
    }
}