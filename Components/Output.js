import React, {Component} from 'react'
class Output extends React.Component {
  render() {
    return (
      <p>
        {this.props.dataSource}
      </p>
    );
  }
}

export default Output;