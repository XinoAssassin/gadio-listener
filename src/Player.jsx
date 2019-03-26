import React, { Component } from "react";
import Nav from "./Nav.jsx";
import Timeline from "./Timeline.jsx";
import Mp3Player from "./Mp3Player.jsx";


class Player extends Component {
    state = {
        timelines: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let TimelineAPI = `https://www.gcores.com/api/volumes/${id}/timelines?&auth_exclusive=dpkynzs2q0wm9o5gi1r83fcabthl4eu`;
        let proxyUrl = "https://cors-anywhere.herokuapp.com/";

        fetch(proxyUrl + TimelineAPI)
            .then(res => res.json())
            .then((res) => {
                if (res.status === 1 && res.results.length) {
                    this.setState({
                        timelines: res.results
                    })
                }
            });
    }

    render() {
        const { timelines } = this.state;
        const { state } = this.props.location;
        return (
            <div>
                <Nav title={state.title} />
                <div>
                    {
                        timelines && timelines.map(result => <Timeline data={result} key={result.id} />)
                    }
                </div>
                <div className="player">
                    <Mp3Player data={state} />
                </div>
            </div>
        );
    }
}
/*         return (
            <div>
                {
                    timelines && timelines.map(result => <Timeline data={result} key={result.id} />)
                }
            </div>
        )
    }
} */
export default Player;