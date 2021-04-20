import React from "react";

import audio_diag from '../assets/audio/diag.mp3';
import audio_north from '../assets/audio/diag.mp3';
import applause from '../assets/audio/applause.mp3';
class SoundManager extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidMount() {
        this.audioRef.current.play();
    }

    componentDidUpdate() {
        this.audioRef.current.volume = this.props.volume;
    }

    render() {
        let audio;

        if (this.props.screen === "game") {
            audio = audio_north;
        } else if (this.props.screen === "end"){
            audio = applause;
        } else {
            audio = audio_diag;
        }
        
        return <audio loop ref={this.audioRef}>
            <source src={audio} type="audio/mp3"></source>
        </audio>;
    }
}

export default SoundManager;