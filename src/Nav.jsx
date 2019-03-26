import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./style/Nav.css"

class Nav extends Component {

  render() {
    if (this.props.title) {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">{this.props.title}</Navbar.Brand>
        </Navbar>
        )
    }
    else {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Gadio Listener</Navbar.Brand>
        </Navbar>
        )
    }
  }
}

export default Nav;