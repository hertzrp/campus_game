import './Settings.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'



class HelpButton extends React.Component {
    render() {
        return <button className="hud" onClick={this.props.startGame} value="splash">
            <FontAwesomeIcon icon={faQuestion} />
        </button>;
    }
}

export default HelpButton;