import './Panel.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faMousePointer, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class HelpCard extends React.Component {
    render() {
        if (!this.props.active) return null;

        return <div className="hud panel-card help-card">
            <h1>Help</h1>

            <h2>Controls</h2>
            <p>Use the <FontAwesomeIcon icon={faArrowsAlt}/> arrow keys or WASD to control your character. Use your <FontAwesomeIcon icon={faMousePointer}/> mouse to click on <FontAwesomeIcon icon={faInfoCircle}/> information icons and bus stops.</p>

            <h2>Interaction</h2>
            <p>Walk around and find <FontAwesomeIcon icon={faInfoCircle}/> information locations. Click on one to learn more about the location. Doing so will mark the location as visited, and once you've visited all the locations on both campuses you'll complete the game.</p>
            <p>To go to another campus, walk around until you find a magic bus marker. Click on the marker to travel to another campus.</p>
        </div>;
    }
}

export default HelpCard;