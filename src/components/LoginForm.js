import React from "react";
const INITIAL_STATE =  {
  username: '',
  password: ''
};
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange = event => {
      this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("YOU DID IT WRONG")
    } else {
      this.props.handleLogin(this.state)
      this.setState(INITIAL_STATE)
    }
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)} value={this.state.password}/>
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