import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Timeline extends Component {
    render() {
        const { data } = this.props;
        let cardLink;
        if (data.quote_href !== "") {
            cardLink = <Card.Link href={data.quote_href} target="_blank">详情</Card.Link>
        }
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={data.asset_url} width="30%" />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.content}</Card.Text>
                        {cardLink}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Timeline;