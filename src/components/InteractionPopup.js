import React from "react";

class InteractionPopup extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.enterEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.enterEvent);
    }

    enterEvent = (e) => {
        if(e.key === "Enter"){
            this.props.closePopup();
        }
    }
    render() {
        let popup = this.props.state.popup;

        return <div className="hud interaction-popup">
            <h1>{popup.title}</h1>
            <img src={require(`../assets/info/${popup.name}.jpg`).default} alt={popup.name}></img>
            <p>{popup.description}</p>
            <button onClick={this.props.closePopup}>Continue {">"}</button>
        </div>;
    }
}

export default InteractionPopup;