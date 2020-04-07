import React from "react";
// import DisplayCharsLeft from './DisplayCharsLeft';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      // maxChars: props.maxChars,
      // charsRemaining: props.maxChars,
      tweet: ''
    };
  }
//these learn tests are bullshit
  handleChange = event => {
    // console.log(event.target.value)
    // console.log(event.target.value.length)
    this.setState({
        // charsRemaining: this.state.maxChars - event.target.value.length,
        tweet: event.target.value
      })
    // console.log(this.state)
  }

  // displayCharsLeft = () => {
    // return <DisplayCharsLeft chars={this.state.charsRemaining} />
  // }

  render() {
    let charsRemaining = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleChange}
          value={this.state.tweet}
        />
        {charsRemaining}
        <div>
          <h2>Chars Left</h2>
          {/* {this.displayCharsLeft()} */}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
