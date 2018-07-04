import PageHome from "pages/PageHome";
import PagePost from "pages/PagePost";
import PageBlogs from "pages/PageBlogs";
import PagePosts from "pages/PagePosts";

export default [
    //главная страница с описанием
    {
        path: "/",
        exact: true,
        component: PageHome
    },
    //страница с перечнем блогов
    {
        path: "/blogs",
        exact: true,
        component: PageBlogs
    },
    //страница с перечнем постов
    {
        path: "/posts",
        exact: true,
        component: PagePosts
    },
    //страница поста с идентификатором id
    {
        path: "/post/:id",
        exact: true,
        component: PagePost
    },
];