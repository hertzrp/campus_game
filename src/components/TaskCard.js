import './Panel.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

class TaskCard extends React.Component {
    render() {
        if (!this.props.active) return null;

        let tasks = this.props.interactions.map((interaction) => {
            if (this.props.visited[interaction.popup.name]) {
                return <p>
                    <span className="icon checked"><FontAwesomeIcon icon={faCheckCircle}/></span>
                    {interaction.popup.title}
                </p>
            } else {
                return <p>
                    <span className="icon"><FontAwesomeIcon icon={faCircle} /></span>
                    {interaction.popup.title}
                </p>
            }
        });
        
        return <div className="hud panel-card tasklist">
            <h1>Task List <span>{this.props.map.title}</span></h1>
            {tasks}
        </div>;
    }
}

export default TaskCard;