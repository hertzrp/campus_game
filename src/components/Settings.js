import './Settings.css'
import React from "react";
import HelpButton from './HelpButton';
// import SettingsButton from './SettingsButton';


class Settings extends React.Component {
    render() {
        return <div className="settings">
            <HelpButton startGame={this.props.startGame} value="splash"></HelpButton>
            {/* <SettingsButton onClick={this.props.onClick}></SettingsButton> */}
        </div>;
    }
}

export default Settings;