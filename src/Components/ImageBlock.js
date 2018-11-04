import React, { Component } from 'react';
import './ImageBlock.css';

class ImageBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
        id elit blandit, ornare sem eu, bibendum neque. Ut tincidunt tellus gravida 
        eros cursus mollis. Mauris gravida dui felis, quis suscipit ipsum iaculis 
        vitae. Vestibulum non lacus vel risus feugiat tristique quis eu lectus.`,
    };
  }

  render() {
    return (
      <div className="container"
        style={this.props.style}
      >
        <div className="imgContainer">
          <img
            src={this.props.imgsrc}
          />
        </div>
        <div className="textContainer">
          <div className="title"><strong>{this.props.title}</strong></div>
          <div>{this.state.content}</div>
        </div>
      </div>
    );
  }
}

export default ImageBlock;