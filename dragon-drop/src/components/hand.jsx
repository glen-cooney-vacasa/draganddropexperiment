import React, { Component } from 'react';
import Card from './card.jsx'

import _ from 'lodash';

import '../stylesheets/hand.css';

const originX = 50;
const originY = 200;
const spreadAngle = 5;

class Hand extends Component {
  getNewAngle(){
      this.spreadAngle+=this.spreadAngle
      return spreadAngle;
  }

  generateHand(){
    var hand = {};
    var cards = [];
    var key = 0;

    const handSize = this.props.handSize;

    switch( this.props.mode){
      case 'horizontal':
        cards = _.times(handSize, ()=>{
          key += 1;
          return (
            <Card
              key={`c${key}`}
              text={`This is card ${key}`}
              onCardClick={this.props.onCardClick}
            >
            </Card>
          )
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

  render() {
    const cards = this.generateHand();

    return (
      <div className="hand">
        {cards}
      </div>
    );
  }
}

export default Hand;
