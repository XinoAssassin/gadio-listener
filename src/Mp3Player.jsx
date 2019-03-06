import React, { Component } from "react";
import { PlayButton, Timer } from "react-soundplayer/components";
import { withCustomAudio } from "react-soundplayer/addons";

const SoundPlayer = withCustomAudio(
    props => {
        const { trackTitle } = props;
        return (
            <div>
                <PlayButton />
                <h2>{trackTitle}</h2>
                <Timer />
            </div>)
    }
)

class Mp3Player extends Component {
    render() {
        const { data } = this.props;
        return (
            <SoundPlayer steamUrl={data.media.mp3[0]} trackTitle={data.title} preloadType="auto" />
        )
    }
}

export default Mp3Player;