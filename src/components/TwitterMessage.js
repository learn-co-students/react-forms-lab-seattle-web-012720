import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      charsRemaining: 280
    };
  }

  handleChange = (event) => {
    this.setState({
        message: event.target.value,
        charsRemaining: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{this.state.charsRemaining} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
