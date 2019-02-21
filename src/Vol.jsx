import React, { Component } from "react";
import { Media, ListGroupItem } from "react-bootstrap";

class Vol extends Component {
    handleClickOnItem() {

    }

    render() {
        const { data } = this.props;
        return (
            <ListGroupItem>
                <Media as="li">
                    <img className="thumb_cover" src={data.thumb_url} width={128} height={128} />
                    <Media.Body>
                        <h5>{data.title}</h5>
                        <p>{data.desc}</p>
                    </Media.Body>
                </Media>
            </ListGroupItem>
        )
    }
}

export default Vol;