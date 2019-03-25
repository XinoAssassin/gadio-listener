import React, { Component } from "react";
import List from "./List.jsx";
import Player from "./Player.jsx"
import Mp3Player from "./Mp3Player.jsx"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style/App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container fluid={true}>
                    <Route exact path="/" component={List} />
                    <Route path="/play/:id" component={Player} />
                </Container>
            </BrowserRouter>
            
/*             <Container fluid={true}>
            <Mp3Player />
            </Container> */
        )
    }
}

export default App;