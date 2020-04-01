import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  updateCharCount = (length) => {
    return this.props.maxChars - length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        <span>Remaining characters: {this.updateCharCount(this.state.message.length)}</span>
      </div>
    );
  }
}

export default TwitterMessage;
