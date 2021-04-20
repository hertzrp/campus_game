import './Panel.css'
import React from "react";
import HelpButton from './HelpButton';
import TaskButton from './TaskButton';
import SettingsButton from './SettingsButton';

import TaskCard from './TaskCard';
import SettingsCard from './SettingsCard';
import HelpCard from './HelpCard';


class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: ""
        }
    }

    toggleTaskCard = () => {
        if (this.state.active === "tasks") {
            this.setState({ active: "" })
        } else {
            this.setState({ active: "tasks" })
        }
    }

    toggleSettingsCard= () => {
        if (this.state.active === "settings") {
            this.setState({ active: "" })
        } else {
            this.setState({ active: "settings" })
        }
    }

    toggleHelpCard = () => {
        if (this.state.active === "help") {
            this.setState({ active: "" })
        } else {
            this.setState({ active: "help" })
        }
    }


    render() {
        return <div className="panel">
            <HelpButton onClick={this.toggleHelpCard}></HelpButton>
            <TaskButton onClick={this.toggleTaskCard}></TaskButton>
            <SettingsButton onClick={this.toggleSettingsCard}></SettingsButton>
            
            <HelpCard active={this.state.active === "help"}></HelpCard>
            <TaskCard active={this.state.active === "tasks"}
                interactions={this.props.interactions}
                visited={this.props.visited} 
                map={this.props.map}></TaskCard>
            <SettingsCard active={this.state.active === "settings"}
                volume={this.props.volume}
                changeSettings={this.props.changeSettings}></SettingsCard>
        </div>;
    }
}

export default Panel;