import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBlock from './Components/ImageBlock';

class App extends Component {

  render() {

    const firstBlock = {
      backgroundColor: "white",
      color: "black",
      padding: "100px 0 100px 0"
    };

    const secondBlock = {
      backgroundColor: "#3a3a3a",
      color: "white",
      padding: "120px 0 10px 0"
    };

    const thirdBlock = {
      backgroundImage: "linear-gradient(#3a3a3a, white)",
      color: "white",
      padding: "10px 0 120px 0"
    };

    return (
      <div className="App">
        <ImageBlock
          title={"MONSOON III"}
          imgsrc={"/vimeopic1.jpg"}
          style={firstBlock}
        />
        <ImageBlock 
          title={"BEAMS"}
          imgsrc={"/vimeopic2.jpg"}
          style={secondBlock}
        />
        <ImageBlock 
          title={"Move 2"}
          imgsrc={"/vimeopic3.jpg"}
          style={thirdBlock}
        />
      </div>
    );
  }
}

export default App;
