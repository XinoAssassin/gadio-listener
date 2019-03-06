import React, { Component } from "react";
import Vol from "./Vol.jsx";
import { ListGroup } from "react-bootstrap";

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

        return (<ListGroup>
                {
                    vols && vols.map(result => <Vol data={result} key={result.id} />)
                }
                </ListGroup>
        );
    }
}

export default List;