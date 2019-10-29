import React from "react";

class Lightswitch extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default Lightswitch;
