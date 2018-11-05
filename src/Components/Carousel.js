import React, { Component } from 'react';
import './Carousel.css';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

class Carousel extends Component {

  constructor (props) {
    super(props);
    
    this.state = {
      currentImageIndex: 0
    };
    
    this.images = [
      ["/nichts.jpg", "#24b6ea", "Nichts passiert / A Decent Man", "A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries."],
      ["/hunt.jpg", "#389fe1", "Hunt for the Wilder People", "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows."],
      ["/viceversa.png", "#b5af63", "Vice Versa", "Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible."],
      ["/fourthphase.jpg", "#3479a5", "The Fourth Phase", "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice."],
      ["/fullmoon.png", "#848484", "Full Moon", "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport."],
    ]

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  
  previousSlide () {
    const lastIndex = this.images.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const resetIndex = currentImageIndex === 0;
    const currentIndex =  resetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: currentIndex
    });
  }
  
  nextSlide () {
    const lastIndex = this.images.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const resetIndex = currentImageIndex === lastIndex;
    const currentIndex =  resetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: currentIndex
    });
  }

  render() {
    return (
      <div className="carouselContainer">
        <div className="leftArrow">
          <Arrow symbol={"<"} onClick={this.previousSlide} />
        </div>
        <ImageSlide 
          url={this.images[this.state.currentImageIndex][0]}
          boxColor={this.images[this.state.currentImageIndex][1]}
          title={this.images[this.state.currentImageIndex][2]}
          description={this.images[this.state.currentImageIndex][3]}
        />
        <div className="rightArrow">
          <Arrow symbol={">"} onClick={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default Carousel;