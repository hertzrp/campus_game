import './Player.css'
import React from "react";
import sprite from '../assets/player.png';

class Player extends React.Component {

    render() {

        return <div className="object player" style={{
            left: this.props.state.x,
            top: this.props.state.y
        }}>
            <img src={sprite} alt=""></img>
        </div>;
    }
}

export default Player;