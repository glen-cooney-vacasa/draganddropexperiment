import React, { Component } from 'react';
import Card from './components/card.jsx'
import '../stylesheets/card.css';

const originX = 50;
const originY = 200;
const spreadAngle = 5;
const handSize = 5;

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
    return (
      <div className="hand">
        <p>Hand loaded</p>
        {_.times(handSize,
            <Card originX={originX} originY={originY} angle={this.getNewAngle()}/>
        )}
        
      </div>
    );
  }
}

export default Hand;
