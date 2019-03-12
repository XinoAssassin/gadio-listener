import React, { Component } from "react";
import ReactPlayer from "react-player";

class Mp3Player extends Component {
    render() {
        const { data } = this.props;
        return(
            <div className="player-wrapper">
            <ReactPlayer url={data.media.mp3[0]} config={{
                file: {
                    forceAudio: true
                }
            }} 
            playing controls />
            </div>
        )
    }

}

export default Mp3Player;