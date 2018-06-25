import React from "react";
import {Fragment} from "react";

import Post from "components/Post";

export default class PostWidgetContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            title: "",
            text: "",
        };
    }

    /**
     * Загрузка страницы по номеру, изменение текущего состояния. Используется кнопками пагинации и здесь
     * @param page
     */
    downloadPost = (id) => {
        const {match} = this.props;

        let str=`http://jsonplaceholder.typicode.com/posts/${id}`;
        console.log(str);
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                console.log(post);
                this.setState({
                        'id': id,
                        'title': post.title,
                        'text': post.body
                    }
                );
                console.log("Container:"+this.state.posts);
            });
    };

    componentDidMount() {
        this.downloadPost(this.state.id);
    }

    render() {
        const {match}=this.props;
        console.log(match);

        return (
            <Fragment>
                <Post {...this.state} />
            </Fragment>
        );
    }
}