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
    const buttonType = this.state.count < 3 ? "start-button"
      : this.state.count < 6 ? "purple-button"
        : this.state.count < 9 ? "lav-button"
          : this.state.count < 12 ? "coral-button"
            : this.state.count < 15 ? "orange-button"
              : this.state.count < 18 ? "yellow-button"
                : "white-button";
    return <button className={buttonType} onClick={this.handleClick}>Hot Button!</button>
    }
}
