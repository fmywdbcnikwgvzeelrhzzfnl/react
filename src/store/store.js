import savedPosts from "./posts";

export default class Store {
    constructor() {
        this.state = {
            posts: savedPosts,
        }
    }

    getIndex(id) {
        for (let i = 0; i < this.state.posts.length; i++) {
            if (id === this.state.posts[i].id) return i;
        }
        return -1;
    }

    create(post) {
        this.state.push(post);
    }

    read(id) {
        let ret = {
            result: -1,
            data: [],
        };
        let ind = this.getIndex(id);
        if (ind !== -1) {
            ret["result"] = ind;
            ret["data"] = this.state.posts[ind];
        }
        return ret;
    }

    update(id, post) {
        this.state.posts[this.getIndex(id)] = post;
    }

    delete(id) {
        let ret = {
            result: -1,
        };
        let ind = this.getIndex(id);
        if (ind !== -1) {
            ret["result"] = ind;
            this.state.posts.splice(ind, 1);
        }
        return ret;
    }


}
