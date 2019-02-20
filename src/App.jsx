import React, { Component } from "react";
import List from "./List";
import { Container } from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Container>
                <List />
            </Container>
        )
    }
}

export default App;