import React, { Component } from 'react';
import Card from './card.jsx'
import '../stylesheets/card.css';
import _ from 'lodash';

const originX = 50;
const originY = 200;
const spreadAngle = 5;
const handSize = 10;

class Hand extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      toggleFan: false,
      style: this.getHandOrientation()
    }
  }

  handleClick(){
    console.log(`Fanning cards`);
  }

  getNewAngle(){
      this.spreadAngle+=this.spreadAngle
      return spreadAngle;
  }

  getHandOrientation(){
    return {
      // transformOrigin: "50% 50%",
      // msTransformOrigin:"50% 50%",
      // WebkitTransformOrigin:"50% 50%",
      transform: "rotate(-20deg)",
      msTransform: "rotate(-20deg)",
      WebkitTransform: "rotate(-20deg)"
    }
  }

  render() {
    var i = 0;
    var cards = _.times(handSize, ()=>{
      return <Card
                originX={originX}
                originY={originY}
                angle={5*i}
                key={i++}
                text={`This is card ${i}`}/>
    });

    return (
      <div>
        <div className="hand" style={this.state.style}>
          {cards}
        </div>
      </div>
    );
  }
}

export default Hand;
