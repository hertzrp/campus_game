import './Settings.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


class SettingsButton extends React.Component {
    render() {
        return <button className="hud" value="splash" onClick={this.props.startGame}>
            <FontAwesomeIcon icon={faCog} />
        </button>;
    }
}

export default SettingsButton;