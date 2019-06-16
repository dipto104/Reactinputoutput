import React, {Component} from 'react'
class Input extends React.Component {
  render() {
    return (
      <input value={this.props.inputvalue} onChange={this.props.onChange} />
    );
  }
}

export default Input;