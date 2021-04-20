import './Panel.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'



class HelpButton extends React.Component {
    render() {
        return <button className="hud" onClick={this.props.onClick} value="splash">
            <FontAwesomeIcon icon={faQuestion} />
        </button>;
    }
}

export default HelpButton;