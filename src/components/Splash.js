import './Splash.css'
import React from "react";
import icon from "../assets/m.svg"

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
                <center><h2>BlueView Virtual Campus</h2></center>
            </div>
            
            <div className="howToPlay">
                <h2>How to Play:</h2>
                <div className="gamePlay">
                    <h3>Movement:</h3>
                    <ul>
                        <p>
                        Using the directional arrows on your keyboard you can move your character around. 
                        </p>
                        <div className="bus"><p>To travel between campus locations find the bus stop and click on the <img src={icon} alt="bus-stop"></img> icon.</p></div>
                    </ul>
                    <h3>Objective:</h3>
                    <ul>
                        <p>
                            Explore around campus by searching for new buildings that you have yet to discover.
                        </p>
                        <p>
                            Locate and learn about new buildings by clicking on that building's icon to grow your progress.
                        </p>
                        <p>
                            As you gain XP you will move from a Freshman to a Senior and finally Graduate at 100%.
                        </p>
                        <p>
                            To track your progress click the list icon in the top right corner.
                        </p>
                    </ul>
                </div>
            </div>
            <br></br>
            <center><button onClick={this.runGame}>{button_text}</button></center>
        </div>;
    }
}

export default Splash;