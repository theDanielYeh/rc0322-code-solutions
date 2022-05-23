import React from "react";
import ReactDOM from "react-dom/client";


export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchOff: true,
      seconds: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
    this.tick = this.tick.bind(this);
    this.interval = null;
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  handleFaceClick() {
    if (this.state.watchOff) {
      this.setState({
        seconds: 0
      })
    }
  }

  handleButtonClick() {
    if (this.state.watchOff) {
      this.setState({
        watchOff: !this.state.watchOff,
      })
      this.interval = setInterval(this.tick, 1000);
    } else {
      this.setState({ watchOff: !this.state.watchOff})
      clearInterval(this.interval);
    }
  }

  render() {
    const buttonType = this.state.watchOff ? 'play' : 'pause';
    return (
      <div className="container">
        <div className="stopwatch" onClick={this.handleFaceClick}>
          <div className="displayTime">{this.state.seconds}</div>
        </div>
        <i className={`fas fa-${buttonType} fa-5x`} onClick={this.handleButtonClick} />
      </div>
    )
    // Code Below is saved for learning purposes/future reference
    // if (this.state.watchOff) {
    //   return (
    //     <div className="container">
    //     <div className="stopwatch" onClick={this.handleFaceClick}>
    //       <div className="displayTime">{this.state.seconds}</div>
    //     </div>
    //     <i className="fas fa-play fa-5x" onClick={this.handleButtonClick}/>
    //   </div>
    //   )
    // } else if (!this.state.watchOff) {
    //   return (
    //     <div className="container">
    //     <div className="stopwatch">
    //       <div className="displayTime">{this.state.seconds}</div>
    //     </div>
    //     <i className="fas fa-pause fa-5x" onClick={this.handleButtonClick} />
    //   </div>
    //   )}
  }
}
