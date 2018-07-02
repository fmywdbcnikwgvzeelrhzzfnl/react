import React from "react";
import {Fragment} from "react";
import {connect} from 'react-redux';    //подключаем контейнер к Redux
import {loadPosts} from "actions/posts";
import {loadPost} from "actions/posts";

import Post from "components/Post";

class PostContainerRedux extends React.PureComponent {

    componentDidMount() {
        const {load} = this.props;
        load();
    }

    render() {
        return (
            <Fragment>
                <Post {...this.props.post} />
            </Fragment>
        );
    }
}

//определяет, какие данные нужно вписать в props данного контейнера до вызова самого контейнера.
//берем все пропсы контейнера, некоторые значения из хранилища (state)
//и возвращаем = записываем в props
function mapStateToProps(state, props) {
    return {
        ...props,
        loading: state.posts.loading,
        post: state.posts.items,
    }
}

//аналогично для возможных actions, которые потребуеются в контейнере
function mapDispatchToProps(dispatch, props) {
    //console.log(props);
    return {
        ...props,
        load: () => loadPost(dispatch,props.id),
    }
}

//подключаем контейнер к хранилищу вызовом декоратора state
export default connect(mapStateToProps, mapDispatchToProps)(PostContainerRedux);   //экспортируем подключенный контейнер