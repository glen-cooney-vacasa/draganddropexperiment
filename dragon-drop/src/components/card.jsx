import React, { Component } from 'react';

import Region from './region.jsx'
import '../stylesheets/card.css';
import CardImage from './cardImage.jsx'

class Card extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    let scale = this.props.scale || 0.5

    this.state = {
      hover: false,
      toggleSpin: false,
      scale: scale
    }
  }

  getStyle(){
    return {
      backgroundColor: 'lightgray',
      transform: `scale(${this.state.scale}, ${this.state.scale})`,
      MsTransform: `scale(${this.state.scale}, ${this.state.scale})`,
      WebkitTransform: `scale(${this.state.scale}, ${this.state.scale})`
    }
  }

  handleClick(e){
    e.preventDefault();

    this.props.onCardClick(this);
  }

  componentDidMount(e){
    this.setState({
      style: this.getStyle()
    })
  }

  render() {
    return (
      <div className="card" style = {this.state.style}>
          <div className="event-layer"
                  onClick={this.handleClick}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}>
            <Region
                    angle={this.props.angle}
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
