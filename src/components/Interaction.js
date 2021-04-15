import './Interaction.css'
import React from "react";
import InteractionPopup from "./InteractionPopup";


class Interaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    isPlayerNearby() {
        let data = this.props.interaction;
        let player = this.props.player;
        
        return Math.abs(player.x - data.x) < data.radius && Math.abs(player.y - data.y) < data.radius;
    }
    
    openPopup = () => {
        this.setState({
            active: true
        });
        
        this.props.markVisited(this.props.interaction.popup.name);

        this.props.disable();
    }

    closePopup = () => {
        this.setState({
            active: false
        });
        this.props.enable();
    }

    render() {
        let interaction_icon;
        let interaction_popup;
        const { active } = this.state;

        let isActive = "";
        let isVisited = "";

        if (this.isPlayerNearby()) {
            isActive = " active";
        }

        if (this.props.visited[this.props.interaction.popup.name]) {
            isVisited = " visited";
        }
        
        interaction_icon = <div className={"interaction-icon" + isActive + isVisited} onClick={this.openPopup} style={{
            left: this.props.interaction.x,
            top: this.props.interaction.y
        }}></div>

        if (active) {
            interaction_popup = <InteractionPopup state={this.props.interaction} closePopup={this.closePopup}></InteractionPopup>
        }

        return <div className="interaction">
            {interaction_icon}
            {interaction_popup}
        </div>;
    }
}

export default Interaction;
