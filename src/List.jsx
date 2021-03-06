import React, { Component } from "react";
import Vol from "./Vol.jsx";
import { ListGroup, Spinner } from "react-bootstrap";
import "./style/List.css"
import Nav from "./Nav.jsx"

let page = 1;
let GADIO_API = `https://www.gcores.com/api/categories/9/originals?page=${page}&auth_exclusive=dpkynzs2q0wm9o5gi1r83fcabthl4eu`;

class List extends Component {
    state = {
        vols: null
    }

    componentDidMount() {
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyUrl + GADIO_API)
            .then(res => res.json())
            .then((res) => {
                if (res.status === 1 && res.results.length) {
                    this.setState({
                        vols: res.results
                    })
                }
            });
    }

    render() {
        const { vols } = this.state;

        if (vols) {
            return (
            <div>
            <Nav />
            <ListGroup>
                {
                    vols && vols.map(result => <Vol data={result} key={result.id} />)
                }
            </ListGroup>
            </div>
            );
        }
        else {
            return (
                <div>
                    <Nav />
                <Spinner animation="border" role="status" className="loading-animation">
                </Spinner>
                </div>
            )
        }
    }

/*         render() {
            return(
                <div className="loading-animation-wrapper">
                <Spinner animation="border" role="status" className="loading-animation">
                </Spinner>
                </div>
            )
        } */

}

export default List;