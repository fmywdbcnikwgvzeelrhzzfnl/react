import React from "react";
import {Fragment} from "react";

import Post from "components/Post";

export default class PostContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        const {id}=this.props;  //получаем номер поста

        this.state = {
            id: id,
            title: "",
            text: "",
        };
    }

    /**
     * Загрузка страницы по номеру, изменение текущего состояния. Используется кнопками пагинации и здесь
     * @param page
     */
    downloadPost = (id) => {
        //const {match} = this.props;

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
        return (
            <Fragment>
                <Post {...this.state} />
            </Fragment>
        );
    }
}