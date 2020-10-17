import ReactDOM from "react-dom";
import React, { Component } from "react";
import Countdown from "react-countdown-now";
import ReactCodeInput from "react-code-input";
const lengthToken = 6;

class Test extends Component {
  countdownDate;

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      secondsToExpire: 600000
    };
    this.countdownDate = Date.now() + this.state.secondsToExpire;
  }

  saveTokenToState = token => {
    this.setState({ token });
  };

  render() {
    const renderer = ({ minutes, seconds }) => (
      <span>
        {minutes}:{seconds}
      </span>
    );
    return (
      <div>
        <label htmlFor="token">
          <ReactCodeInput
            inputmode="numeric"
            pattern="[0-9]*"
            type="number"
            name="test"
            fields={lengthToken}
            value={this.state.token}
            onChange={this.saveTokenToState}
          />
        </label>
        <Countdown renderer={renderer} date={this.countdownDate} />
      </div>
    );
  }
}

export default Test