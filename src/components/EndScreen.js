import './EndScreen.css'
import React from "react";

class EndScreen extends React.Component {
    render(){
        return <div className="endScreen">
            <center><h1>The End!</h1></center>
            <br></br>
            <center><button onClick={this.props.startGame}>Contiue Playing</button></center>
        </div>;
    }
}

export default EndScreen;