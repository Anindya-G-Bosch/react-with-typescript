//Chapter - 109

//This file explains how we can type a React Class Component using TypeScript.

import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class TypingClassComponent extends Component<
  CounterProps,
  CounterState
> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default TypingClassComponent;
