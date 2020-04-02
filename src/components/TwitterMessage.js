import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  };

  handleChange = (event) => {
    this.setState({
        message: event.target.value,
        maxChars: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} id="message" />
        <p>Characters Remaining: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
