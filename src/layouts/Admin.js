import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "components/RouteWithSubRoutes";

export default function Admin({ routes }) {
    return (
        <div>
            <h2>Admin</h2>
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/movie">Movie</Link>
                </li>
                <li>
                    <Link to="/admin/todo">Todo App</Link>
                </li>
            </ul>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <RouteWithSubRoutes
                            key={index}
                            {...route}
                        ></RouteWithSubRoutes>
                    );
                })}
            </Switch>
        </div>
    );
}
