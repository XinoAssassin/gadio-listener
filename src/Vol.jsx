import React, { Component } from "react";
import { Media, ListGroupItem } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

class Vol extends Component {
    state = {
        redirect: false
    }

    handleClickOnItem = () =>{
        this.setState({
            redirect: true
        });
    }

    render() {
        const { data } = this.props;
        if (this.state.redirect) {
            return (
                <Redirect push to={{
                    pathname: "/play/" + data.id,
                    state: data
                }} />
            )
        }

        return (
            <ListGroupItem>
                <Media as="li">
                    <img className="thumb_cover" src={data.cover_url} width={64} height={64} />
                    <Media.Body onClick={this.handleClickOnItem}>
                        <h5>{data.title}</h5>
                        <p>{data.desc}</p>
                    </Media.Body>
                </Media>
            </ListGroupItem>
        )
    }
}

export default Vol;