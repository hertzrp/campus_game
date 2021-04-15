import './Location.css'
import React from "react"

class Location extends React.Component {
    render(){
        return <div className="hud location">
            <p>Location</p>
            <h1>{this.props.map.title}</h1>
        </div>;
    }
}

export default Location;