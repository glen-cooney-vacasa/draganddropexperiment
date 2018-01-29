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
      style: this.getStyle(),
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

  getStyle(){
    return {
      display: `inline-block`
    }
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
              overlap={false}
              key={i++}
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
      <div className="hand" style={this.state.style}>
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
    // var i = 0;
    // var cards = _.times(handSize, ()=>{
    //   return <Card
    //             originX={originX}
    //             originY={originY}
    //             angle={5*i}
    //             key={i++}
    //             text={`This is card ${i}`}
    //          />
    // });

    var cards = this.generateHand();

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
