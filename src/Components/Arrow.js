import React, { Component } from 'react';
import './Arrow.css';

class Arrow extends Component {
 
  render() {

    return (
      <div 
        className="arrow"
        onClick={this.props.onClick}
      >
        {this.props.symbol}
      </div>
    );
  }
}

export default Arrow;