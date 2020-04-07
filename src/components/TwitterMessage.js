import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmitEvent = event => {
    event.preventDefault()
    let formData = { message: this.state.message }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmitEvent(event)}>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <div>Chars remaining: {(this.props.maxChars - this.state.message.length)}</div>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
