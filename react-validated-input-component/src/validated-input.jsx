import React from "react";

export default class Validator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const faType = this.state.password.length < 8 ? 'times' : 'check';
    const errorMsg = this.state.password.length === 0 ? 'A password is required.'
      : this.state.password.length < 8 ? 'Your password is too short.'
      : '';
    return (
      <form action="">
        <div className="container">
          <h1>Password</h1>
          <div className="div-for-icon">
              <input type="password" name="password" onChange={this.handleChange}/>
            <i class={`fas fa-solid fa-${faType}`}></i>
          </div>
          <h2>{errorMsg}</h2>
        </div>
      </form>
    )
  }
}
