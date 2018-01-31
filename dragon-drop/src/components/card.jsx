import React, { Component } from 'react';
import sizeMe from 'react-sizeme'

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
      style: this.getStyle()
    }
  }

  toggleHover(){
    console.log(`card hover`);
  };

  getStyle(){
    return {
      backgroundColor: 'lightgray'
    }
  }

  handleClick(){
    console.log(`clicking card`);
  }

  render() {
    return (
      <div className="card">
          <div className="event-layer"
                  onClick={this.handleClick}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}>
            <Region originX={this.props.originX}
                    originY={this.props.originY}
                    angle={this.props.angle}
                    index={this.props.index}
                    style={this.state.style}
              >
                <CardImage></CardImage>
                {this.props.text}
            </Region>
          </div>
      </div>
    );
  }
}

export default Card;
