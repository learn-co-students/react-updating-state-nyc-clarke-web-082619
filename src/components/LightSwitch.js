// Code LightSwitch Component Here
import React from 'react';

class LightSwitch extends React.Component{
    constructor() {
        super();
        // Define the initial state:
        this.state = {
            toggled: false
        };
      }

    handleClick = () => {
       
       this.setState(previousState => {
        return {
            // count: previousState.count + 1
            toggled: !previousState.toggled
        }
       })
    }

    render(){
        return (
            <div>
              <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
          );
    }
}

export default LightSwitch;