import React, { Component } from "react";
import List from "./List.jsx";
import Player from "./Player.jsx"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container fluid={true}>
                    <Route exact path="/" component={List} />
                    <Route path="/play/:id" component={Player} />
                </Container>
            </BrowserRouter>
        )
    }
}

export default App;