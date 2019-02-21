import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "unsemantic/assets/stylesheets/unsemantic-grid-responsive-no-ie7.css"
import App from "./App.jsx";
import {
    BrowserRouter
} from "react-router-dom";

ReactDOM.render( (<BrowserRouter> <App /> </BrowserRouter>), document.getElementById("root"));