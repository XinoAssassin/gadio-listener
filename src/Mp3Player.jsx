import React, { Component } from "react";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import "./style/Mp3Player.css";

class Mp3Player extends Component {
    render() {
        const { data } = this.props;
/*         return(
            <div className="player-wrapper">
            <ReactPlayer url={data.media.mp3[0]} config={{
                file: {
                    forceAudio: true
                }
            }} 
            playing controls />
            </div>
        ) */
        return(
            <div className="player-wrapper">
                <AudioPlayer src={data.media.mp3[0]} autoPlay/>
            </div>
        )
    }

}

/* class Mp3Player extends Component {
    render() {
        // const { data } = this.props;
        return (
            <div className="player-wrapper">
                <SeekBar />
                <img className="cover" src="https://image.gcores.com/f6e7077f-8a1c-4ca7-a670-7c30ec19dba8.jpg" />
                <PlayButton />
                <ReactPlayer
                    url="https://alioss.gcores.com/uploads/audio/37f44dde-eb07-4035-8738-827bec4a2e78.mp3"
                    config={{
                        file: {
                            forceAudio: true
                        }
                    }}
                />
            </div>)
    }
}

class SeekBar extends Component {

}

class PlayButton extends Component {

} */

export default Mp3Player;