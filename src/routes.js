import PageHome from "pages/PageHome";
import PagePost from "pages/PagePost";

export default [
    {
        path: "/",
        exact: true,
        component: PageHome
    },
    {
        path: "/post",
        exact: true,
        component: PagePost
    },
    {
        path: "/post/:id",
        exact: true,
        component: PagePost
    }
];