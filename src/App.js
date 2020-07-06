import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import logo from "assets/logo.svg";
import "assets/App.css";
import routes from "./router";
import RouteWithSubRoutes from "components/RouteWithSubRoutes";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <Router>
                <ul>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
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
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
