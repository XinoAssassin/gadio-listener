import React, { Component } from "react";
import { Timeline } from "./Timeline.jsx";
import { isNullOrUndefined } from "util";

let id = 92962;
let TimelineAPI = `https://www.gcores.com/api/volumes/${id}/timelines?&auth_exclusive=dpkynzs2q0wm9o5gi1r83fcabthl4eu`

class Player extends Component {
  state = {
    timelines: null
  }

  componentDidMount() {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/"
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

    return (
      <div>
        {
          timelines && timelines.map(result => <Timeline data={result} key={result.id} />)
        }
      </div>
    );
  }
}

export default Player;