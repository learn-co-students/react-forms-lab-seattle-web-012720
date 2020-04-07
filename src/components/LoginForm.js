import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = (event) => {
    // event.preventDefault()
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
      // [event.target.name]: event.target.value
    })
    // console.log(this.state)
    // this.props.login(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('yes')
    // console.log(!!this.state.username)
    // console.log(!!this.state.password)
    if (!!this.state.username && !!this.state.password) {
      console.log("hi!")
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleLogin} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.username} onChange={this.handleLogin}/>
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
