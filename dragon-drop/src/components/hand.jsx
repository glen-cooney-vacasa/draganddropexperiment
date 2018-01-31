import React, { Component } from 'react';
import Card from './card.jsx'

import _ from 'lodash';

import '../stylesheets/hand.css';

const originX = 50;
const originY = 200;
const spreadAngle = 5;
const handSize = 5;

class Hand extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      toggleFan: false,
      mode: this.props.mode
    }
  }

  handleClick(){
    console.log(`Fanning cards`);
  }

  getNewAngle(){
      this.spreadAngle+=this.spreadAngle
      return spreadAngle;
  }

  generateHand(){
    var hand = {};
    var cards = [];
    var i = 0;

    switch(this.state.mode){
      case 'horizontal':
        console.log(`horizontal hand`);
        cards = _.times(handSize, ()=>{
          return (
            <Card
              key={i++}
              index={i}
              text={`This is card ${i}`}
            >
            </Card>
          )
        })

        break;
      case 'traditional':
        console.log(`traditional hand`);
        //Move to factory
        cards = _.times(handSize, ()=>{
          return <Card
                    originX={originX}
                    originY={originY}
                    angle={5*i}
                    key={i++}
                    index={i}
                    text={`This is card ${i}`}
                 />
        });

        this.setState({
          style: Object.assign({}, this.getStyle(), this.getHandOrientation())
        });

        break;
      default:
        console.warn(`No hand mode selected.`);
        break;
    }

    hand = (
      <div className="cards-container">
        {cards}
      </div>
    )

    return hand;
  }

  getHandOrientation(){
    return {
      transform: "rotate(-20deg)",
      msTransform: "rotate(-20deg)",
      WebkitTransform: "rotate(-20deg)"
    }
  }

  render() {
    var cards = this.generateHand();

    return (
      <div className="hand">
        {cards}
      </div>
    );
  }
}

export default Hand;
