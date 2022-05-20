import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    if (this.state.isToggleOn) {
      return (
        <div className='container'>
          <div onClick={this.handleClick} className="button-on toggle-switch">
            <div className='switch-on'>
            </div>
          </div>
          <h1>ON</h1>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <div onClick={this.handleClick} className="button-off">
            <div className='switch-off'>
            </div>
          </div>
          <h1>OFF</h1>
        </div>
      )
    }
  }
}
