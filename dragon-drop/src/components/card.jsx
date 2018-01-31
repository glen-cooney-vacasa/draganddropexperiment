import React, { Component } from 'react';
import Region from './region.jsx'
import '../stylesheets/card.css';
import CardImage from './cardImage.jsx'

class Card extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      hover: false,
      toggleSpin: false,
      cardStyles: this.getCardStyle()
    }
  }

  toggleHover(){
    console.log(`card hover`);
  };

  getCardStyle(){
    return {
      width: `100%`,
      height: `100%`,
      backgroundColor: 'lightgray',
      left: `${this.props.index * this.width}`
    }
  }

  handleClick(){
    console.log(`clicking card`);
  }

  render() {
    return (
      <div className="card">
          <div className="EventLayer"
                  onClick={this.handleClick}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}>
            <Region originX={this.props.originX}
                    originY={this.props.originY}
                    angle={this.props.angle}
              >
              <div style={this.state.cardStyles}>
                <CardImage></CardImage>
                {this.props.text}
              </div>
            </Region>
          </div>
      </div>
    );
  }
}

export default Card;
