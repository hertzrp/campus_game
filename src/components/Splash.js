import './Splash.css'
import React from "react";

class Splash extends React.Component {
    // constructor(props){
    //     this.state = {
    //         button: "Start Game"
    //     }
    // }
    constructor(props){
        super(props);
        this.state = {
            button: this.props.state.button
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.enterEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.enterEvent);
    }

    enterEvent = (e) => {
        if(e.key === "Enter"){
            this.runGame();
        }
        console.log(this.state.button);
    }

    runGame = () => {
        this.setState({
            button: "Continue Game"
        });
        this.props.startGame();
    }
    
    render() {
        let button_text = this.state.button;

        return <div className="splashScreen">
            <div className="title">
                <center><h1>The University Of Michigan</h1></center>
                <center><h2>Campus Tour</h2></center>
            </div>
            
            <div className="howToPlay">
                <h2>How to Play:</h2>
                <div className="gamePlay">
                    <h3>Movement:</h3>
                    <p className="description">
                        Using the directional arrows on your keyboard you can move your character around. 
                    </p>
                    <h3>Objective:</h3>
                    <p className="description">
                        Explore around campus by searching for new buildings that you have yet to discover.
                        As you locate new buildings you will grow your XP bar indicating your progress.
                    </p>
                </div>
            </div>
            <br></br>
            <center><button onClick={this.runGame}>{button_text}</button></center>
        </div>;
    }
}

export default Splash;