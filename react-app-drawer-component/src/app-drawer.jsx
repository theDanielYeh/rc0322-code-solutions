import React from "react";

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openBurger: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      openBurger: !this.state.openBurger
    })
    console.log('clicking');
    event.preventDefault();
  }

  render() {
    console.log('test');
    if (!this.state.openBurger) {
      return (
        <div className="outer">
          <i class="fas fa-hamburger fa-3x" onClick={this.handleClick}></i>
        </div>
      )
    } else {
      return (
        <div className="container" onClick={this.handleClick}>
          <div className="left-panel">
            <h1>Choose a Tesla</h1>
            <a href="" onClick={this.handleClick}>Model S</a>
            <a href="" onClick={this.handleClick}>Model E</a>
            <a href="" onClick={this.handleClick}>Model X</a>
            <a href="" onClick={this.handleClick}>Model Y</a>
          </div>
        </div>
      )
    }
  }
}
