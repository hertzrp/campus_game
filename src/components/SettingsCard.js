import React from "react";

class SettingsCard extends React.Component {


    render() {
        if (!this.props.active) return null;

        return <div className="hud panel-card">
            <h1>Settings</h1>
            <p>Volume <input class="value" type="range" min="0" max="1" step="0.1" defaultValue={this.props.volume} onChange={this.props.changeSettings}></input></p>
        </div>;
    }
}

export default SettingsCard;