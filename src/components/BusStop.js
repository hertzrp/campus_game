import './BusStop.css'
import React from "react"

import icon from "../assets/m.svg"

class BusStop extends React.Component {
    render(){
        return <div className="object bus-stop" onClick={this.props.onClick} alt={this.props.data.to} style={{
            left: this.props.data.x,
            top: this.props.data.y
        }}>
            <img src={icon} alt={this.props.data.to}></img>
        </div>;
    }
}

export default BusStop;