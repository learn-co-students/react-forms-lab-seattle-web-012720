import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      characters: props.maxChars,
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.value}/>
        <p>Character's remaining {this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
