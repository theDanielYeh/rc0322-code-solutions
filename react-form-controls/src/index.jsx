import React from "react";
import ReactDOM from "react-dom/client";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
     };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event){
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event){
    this.setState({ password: event.target.value });
  }

  handleSubmit(event){
    console.log('This State:', this.state);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="">
       Username:
        <input type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username} />
      </label>
      <label htmlFor="">
        Password:
        <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
      </label>
      <button type="submit" value="submit">Sign Up</button>
    </form>
    )}
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm/>);
