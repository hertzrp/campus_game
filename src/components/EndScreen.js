import './EndScreen.css'
import React from "react";
import Confetti from 'react-confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class EndScreen extends React.Component {
    refresh = () => {
        window.location.reload();
    }
    render(){
        return <div>
            <Confetti></Confetti>
            <div className="endScreen">
                <h1>Congratulations!</h1>
                <h2>You have graduated and can continue to explore the map as an Alumni or start from the beginning!</h2>
                <br></br>
                <button onClick={this.props.startGame}>Contiue Experience</button>
                <br></br><br></br>
                <button onClick={this.refresh}>Restart!</button>
                <div className="gradCap">
                    <FontAwesomeIcon icon={faGraduationCap}><p className="name">test</p></FontAwesomeIcon>
                </div>
            </div>
        </div>;
    }
}

export default EndScreen;