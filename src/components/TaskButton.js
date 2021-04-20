import './Panel.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


class TaskButton extends React.Component {
    render() {
        return <button className="hud" onClick={this.props.onClick}>
            <FontAwesomeIcon icon={faList} />
        </button>;
    }
}

export default TaskButton;