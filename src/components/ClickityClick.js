// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
    constructor() {
        super();
        // Define the initial state:
        this.state = {
          hasBeenClicked: false
        // count: 0
            // toggled: false
        };
      }

    handleClick = () => {
        if(!this.state.hasBeenClicked){
            this.setState({
                hasBeenClicked: true
            }, () => console.log(this.state.hasBeenClicked))
        }
       
    //    this.setState(previousState => {
    //     return {
    //         // count: previousState.count + 1
    //         toggled: !previousState.toggled
    //     }
    //    })
    }

    render(){
        return (
            <div>
              <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
              {/* <p>{this.state.count}</p> */}
              <button onClick={this.handleClick}>Click me!</button>
            </div>
          );
    }
}

export default ClickityClick;