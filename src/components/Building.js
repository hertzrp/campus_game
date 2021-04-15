import React from "react";

class Building extends React.Component {
    render() {
        return <div className="object building" style={{
            left: this.props.state.x,
            top: this.props.state.y
        }}>
            <img src={require(`../assets/buildings/${this.props.state.name}.svg`).default} alt={this.props.state.name} style={{
                width: this.props.state.width
            }}></img>
        </div>;
    }
}

export default Building;