import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return this.state.count < 3
      ? <button className="start-button" onClick={this.handleClick}>Hot Button!</button>
      : this.state.count < 6
        ? <button className="purple-button" onClick={this.handleClick}>Hot Button!</button>
        : this.state.count < 9
          ? <button className="lav-button" onClick={this.handleClick}>Hot Button! </button>
          : this.state.count < 12
            ? <button className="coral-button" onClick={this.handleClick}>Hot Button! </button>
            : this.state.count < 15
              ? <button className="orange-button" onClick={this.handleClick}>Hot Button! </button>
              : this.state.count < 18
                ? <button className="yellow-button" onClick={this.handleClick}>Hot Button! </button>
                : <button className="white-button" onClick={this.handleClick}>Hot Button! </button>;
  }
}
