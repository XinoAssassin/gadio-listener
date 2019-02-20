import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Vol extends Component {
    render() {
        const { data } = this.props;
        return (
                <div className="grid-33">
                    <Card>
                        <Card.Img variant="top" src={data.thumb_url} width="50%" />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        )
    }
}

export default Vol;