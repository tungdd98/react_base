import { lazy } from "react";

const importPages = (requireContext, path = "") => {
    return requireContext.keys().map(key => ({
        path: key.replace(/\./, `./${path}`),
        module: requireContext(key).default
    }));
};

const loadViews = pages => {
    return pages.reduce((act, cur) => {
        return Object.assign(
            {
                [cur.module.name]: lazy(() => import(`${cur.path}`))
            },
            act
        );
    }, {});
};

const layouts = loadViews(
    importPages(require.context("layouts", true, /\.js$/), "layouts")
);
const modules = loadViews(
    importPages(require.context("views", true, /\.js$/), "views")
);

const routes = [
    {
        exact: true,
        path: "/",
        component: layouts["Client"]
    },
    {
        path: "/admin",
        component: layouts["Admin"],
        routes: [
            {
                path: "/admin/dashboard",
                component: modules["Dashboard"]
            },
            {
                path: "/admin/movie",
                component: modules["Movie"]
            },
            {
                path: "/admin/todo",
                component: modules["Todo"]
            }
        ]
    },
    {
        path: "*",
        component: modules["NotFound"]
    }
];

export default routes;
