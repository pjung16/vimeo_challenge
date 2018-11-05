import React, { Component } from 'react';
import './ImageSlide.css';

class Carousel extends Component {
 
  render() {

    const backgroundStyle = {
      backgroundImage: `url(${this.props.url})`
    };

    const mainColor = {
      background: this.props.boxColor
    }

    return (
      <div className="mainContainer">
        <div className="darkTint">
          <div className="backgroundTint" style={mainColor}>
            <div className="imgBackground" style={backgroundStyle}></div>
          </div>
        </div>
        <div className="contentContainer">
          <div className="moviePoster">
            <img src={this.props.url} alt="Movie Poster" />
          </div>
          <div className="infoContainer">
            <div className="movieTitle">{this.props.title}</div>
            <div className="movieDescription">{this.props.description}</div>
            <div className= "buttons">
              <button className="buyNow" style={mainColor}>Buy Now</button>
              <button className="watchTrailer">Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;