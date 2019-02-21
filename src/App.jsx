import React, { Component } from "react";
import List from "./List.jsx";
import Player from "./Player.jsx"
import { Container } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Container fluid={true}>
                <List />
            </Container>
        )
    }
}

export default App;