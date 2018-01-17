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
      toggleFan: false
    }
  }

  handleClick(){
    console.log(`Fanning cards`);
  }

  getNewAngle(){
      this.spreadAngle+=this.spreadAngle
      return spreadAngle;
  }

  render() {
    var i = 0;
    var cards = _.times(handSize, ()=>{
      return <Card originX={originX} originY={originY} angle={5*i} key={i++}/>
    });

    return (
      <div className="hand">
        <p>Hand loaded</p>
        {cards}
      </div>
    );
  }
}

export default Hand;
