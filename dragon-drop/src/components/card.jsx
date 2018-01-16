import React, { Component } from 'react';
import '../stylesheets/card.css';

const debugStyle = {
  // visibility: 'hidden'
}

const originX = 50;
const originY = 200;
// const rotateDeg = -10;

const card = {
  marginLeft: `200px`,
  width: '100px',
  height: '150px',
  border: '5px solid black',
  backgroundColor: 'blue',
  borderRadius: '8px',
  display: 'inline-block',
  transformOrigin: `${originX}% ${originY}%`,
  msTransformOrigin:`${originX}% ${originY}%`,
  webkitTransformOrigin:`${originX}% ${originY}%`
}

// const rotate = {
//   transform: `rotate(${rotateDeg}deg)`,
//   msTransform: `rotate(${rotateDeg}deg)`,
//   webkitTransform: `rotate(${rotateDeg}deg)`
// }

class Card extends Component {
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      cardStyles: card,
      toggleSpin: false,
      originX: this.props.originX,
      originY: this.props.originY,
      angle: this.props.angle
    }
  }
  
  handleClick(){
    let toggle = (this.state.toggleSpin ? false : true);
    let styles = {};
    
    if(toggle){
      styles = Object.assign({}, card, rotate);
    }else{
      styles = card
    }
    
    console.log(`Styles set to ${JSON.stringify(styles)}`);
    
    this.setState({
      toggleSpin: toggle,
      cardStyles: styles
    });
  }
  
  render() {
    return (
      <div className="Card">
        <div style={this.state.cardStyles} onClick={this.handleClick}></div>
        <p style={debugStyle}>Card component loaded</p>
      </div>
    );
  }
}

export default Card;
