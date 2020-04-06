import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    if (this.state.name.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state.name, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleNameChange} value={this.state.name}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
