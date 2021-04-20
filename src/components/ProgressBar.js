import React from "react";
import './ProgressBar.css'

class ProgressBar extends React.Component {
    render() {
        var count = 0;
        Object.values(this.props.visited).forEach(visited => {
          if (visited) {
            count += 1;
          }
        });

        let percent = Math.round(100 * (count / this.props.totalInteractions));
        const width = {
            width: `${percent}%`
        }
        let year = ""
        if(percent < 25){
          year = "Freshman"
        } else if(percent < 50){
          year = "Sophomore"
        } else if(percent < 75){
          year = "Junior"
        } else if(percent === 100){
          this.props.endGame();
          year = "Alumni"
        }
        else{
          year = "Senior"
        }
        return (
            <div id="hud progressbar">
              <span className="hud yeartext">{year}</span>
              <div className="hud backgroundbar">
                <div className="percentbar" style={width}>
                  <span className="percenttext">{`${percent}%`}</span>
                </div>
              </div>
            </div>
          );
    }
}

export default ProgressBar;