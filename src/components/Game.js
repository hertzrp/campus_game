import './Game.css';
import React from 'react';
import Building from './Building';
import ProgressBar from './ProgressBar';
import Player from './Player';
import Interaction from './Interaction';
import Location from './Location';
import Panel from './Panel';
import Splash from './Splash';
import End from './EndScreen'
import BusStop from './BusStop';
import SoundManager from './SoundManager';
import scene_diag from '../scenes/diag.json';
import scene_north from '../scenes/north.json';


class Game extends React.Component {
    constructor(props) {
        super(props);

        this.popup = false;

        this.state = {
            player: {
                x: 1400,
                y: 800,
                velocity: 0.5,
                lastRender: 0,
                width: 70,
                height: 100
            },
            buildings: [],
            interactions: [],
            busStop: {},
            visited: {},
            keys: [],
            volume: 0.1,
            screen: "splash",
            button: "Start Experience",
            completed: false,
            waiting: false
        }

        this.updateCameraPosition = this.updateCameraPosition.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    updatePlayer = (timestamp) => {
        let player = this.state.player;

        let delta = timestamp - player.lastRender;
        let xMove = 0;
        let yMove = 0;

        if (this.state.keys["ArrowLeft"] || this.state.keys["a"]) {
            if (player.x > -60 + player.width/2){
                xMove = -1;
            }
        } 
        else if (this.state.keys["ArrowRight"] || this.state.keys["d"]) {
            if (player.x < this.state.map.width - player.width/2){
                xMove = 1;
            }
        }

        if (this.state.keys["ArrowUp"] || this.state.keys["w"]) {
            if (player.y > -40 + player.height/2){
                yMove = -1;
            }
        } 
        else if (this.state.keys["ArrowDown"] || this.state.keys["s"]) {
            if (player.y < this.state.map.height - player.height/2){
                yMove = 1;
            }
        }

        xMove *= player.velocity * delta;
        yMove *= player.velocity * delta;

        if (xMove && yMove) {
            xMove /= Math.sqrt(2);
            yMove /= Math.sqrt(2);
        }

        let collide = false;

        this.state.buildings.forEach((building) => {
            building.hitboxes.forEach((hitbox) => {
                if (this.isOrWillCollide(player, hitbox, xMove, yMove)) {
                    collide = true;
                }
            });
        });

        if (collide) {
            xMove = 0;
            yMove = 0;
        }
        
        if(this.popup) {
            xMove = 0;
            yMove = 0;
        }

        let newPlayer = player;
        newPlayer.x += xMove;
        newPlayer.y += yMove;
        newPlayer.lastRender = timestamp;
        
        this.setState({
            player: newPlayer
        });

        this.updateCameraPosition();
        window.requestAnimationFrame(this.updatePlayer);
    }

    isOrWillCollide(o1, o2, o1_xChange, o1_yChange) {
        const o1D = {
            left: o1.x + o1_xChange,
            right: o1.x + o1_xChange + o1.width,
            top: o1.y + o1_yChange,
            bottom: o1.y + o1_yChange + o1.height
        };
        const o2D = {
            left: o2.x,
            right: o2.x + o2.width,
            top: o2.y,
            bottom: o2.y + o2.height
        };
        // Adapted from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        if (o1D.left < o2D.right &&
            o1D.right > o2D.left &&
            o1D.top < o2D.bottom &&
            o1D.bottom > o2D.top) {
            // collision detected!
            return true;
        }
        return false;
    }

    disableMovement=()=> {
        this.popup = true;
    }

    enableMovement=()=> {
        this.popup = false;
        if(this.state.completed && !this.state.waiting){
            this.setState({
                screen: "end",
                waiting: true
            });
        }
    }

    loadMapE = (e) => {
        this.loadMap(e.target.alt);
    }

    loadMap = (map) => {
        let newPlayer = { ...this.state.player };
        
        if (map === "diag") {
            this.setState(scene_diag);

            newPlayer.x = scene_diag.busStop.x;
            newPlayer.y = scene_diag.busStop.y;
    
            this.setState({ player: newPlayer });
        } else if (map === "north") {
            this.setState(scene_north);

            newPlayer.x = scene_north.busStop.x;
            newPlayer.y = scene_north.busStop.y;
    
            this.setState({ player: newPlayer });
        }
    }

    countTotalInteractions = () => {
        let newTotalInteractions = 0;

        scene_diag.interactions.forEach(() => {
            newTotalInteractions++;
        });

        scene_north.interactions.forEach(() => {
            newTotalInteractions++;
        });

        this.setState({ totalInteractions: newTotalInteractions });
    }

    componentDidMount() {
        // Count the total interactions
        this.countTotalInteractions();

        // Load the map
        this.loadMap("diag");
        let newPlayer = { ...this.state.player };

        newPlayer.x = 1500;
        newPlayer.y = 900;

        this.setState({ player: newPlayer });

        // Start the player movement loop
        window.requestAnimationFrame(this.updatePlayer);
        
        // Add event listeners
        window.addEventListener("resize", this.updateCameraPosition);
        window.addEventListener("keydown", (e) => {
                let newKeys = this.state.keys;
                newKeys[e.key] = true;
                this.setState({
                    keys: newKeys
                });
            },
        false);
        window.addEventListener("keyup", (e) => {
                let newKeys = this.state.keys;
                newKeys[e.key] = false;
                this.setState({
                    keys: newKeys
                });
            },
        false);
    }

    updateCameraPosition() {
        let playerCenterX = this.state.player.x - window.innerWidth/2 + this.state.player.width/2;
        let playerCenterY = this.state.player.y - window.innerHeight/2 + this.state.player.height/2;

        window.scrollTo(playerCenterX, playerCenterY);
    }

    startGame = () => {
        if(this.state.screen !== "splash"){
            this.setState({
                screen: "splash"
            });
        }
        else{
            this.setState({
                screen: "game",
                button: "Continue Game" 
            });
        }
    }

    endGame = () => {
        if(!this.state.completed){
            this.setState({
                completed: true
            });
        }
    }

    markVisited = (name) => {
        let newVisited = { ...this.state.visited };

        newVisited[name] = true;

        this.setState({ visited: newVisited });
    }

    changeSettings = (e) => {
        let newVolume = e.target.value;

        this.setState({ volume: newVolume });

        console.log(this.state.volume);
    }

    render() {
        const buildings = this.state.buildings.map((building) => {
            return <Building state={building} key={building.name}></Building>
        });

        const interactions = this.state.interactions.map((interaction) => {
            return <Interaction
                interaction={interaction}
                visited={this.state.visited}
                player={this.state.player}
                disable={this.disableMovement}
                enable={this.enableMovement}
                markVisited={this.markVisited}
                key={interaction.popup.title}></Interaction>
        });

        if(this.state.screen === "splash"){
            return <Splash state={this.state} startGame={this.startGame}></Splash>;
        }
        else if(this.state.screen === "end"){
            return <div>
                <End startGame={this.startGame}></End>
                <SoundManager volume={this.state.volume} screen={this.state.screen} map={this.state.map}></SoundManager>
            </div>;
        }
        else{
            return <div id="game">
                    <div id="environment">
                        <img id="map" src={require(`../assets/maps/${this.state.map.name}.svg`).default} alt="map"></img>

                        {buildings}

                        <Player state={this.state.player}></Player>

                        {interactions}

                        <BusStop data={this.state.busStop} onClick={this.loadMapE}></BusStop>
                    </div>

                    <div id="ui">
                        <Location map={this.state.map}></Location>
                        <ProgressBar
                            endGame={this.endGame}
                            visited={this.state.visited}
                            totalInteractions={this.state.totalInteractions}></ProgressBar>
                        <Panel
                            startGame={this.startGame}
                            interactions={this.state.interactions}
                            visited={this.state.visited}
                            map={this.state.map}
                            volume={this.state.volume}
                            changeSettings={this.changeSettings}></Panel>
                    </div>

                    <SoundManager volume={this.state.volume} screen={this.state.screen} map={this.state.map}></SoundManager>
                </div>;
        }
    }
}

export default Game;
