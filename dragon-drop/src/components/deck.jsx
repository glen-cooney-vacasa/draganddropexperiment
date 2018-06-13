import React, { Component } from 'react';
import _ from 'lodash';

import Region from './region.jsx'
import '../stylesheets/card.css';

import Player from '../stores/deck.js';
import DeckData from '../stores/deck.js';

import CardBack from '../images/cardAssets/CardBackPlaceHolder.jpg';

class Deck extends Component {
  constructor(props){
    super(props);

    let scale = this.props.scale || 0.5
    let testDeckArr = _.range(10);

    this.state = {
      hover: false,
      toggleSpin: false,
      scale: scale,
      data: new DeckData(testDeckArr),
      player: new Player()
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(e){
    this.setState({
      style: this.getStyle()
    })
  }

  getStyle(){
    return {
      backgroundImage: `url(${CardBack})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `12vw 16vw`,
      margin: `auto`,
      backgroundPosition: `center center`,
      transform: `scale(${this.state.scale}, ${this.state.scale})`,
      MsTransform: `scale(${this.state.scale}, ${this.state.scale})`,
      WebkitTransform: `scale(${this.state.scale}, ${this.state.scale})`
    }
  }

  handleClick(e){
    this.state.player.drawCard(this.state.data);
  }

  render() {
    return (
      <div className="card" style={this.state.style}>
        <div className="event-layer"
                onClick={this.handleClick}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}>
          <Region
                  angle={this.props.angle}
            >
          </Region>
        </div>
      </div>
    );
  }
}

export default Deck;
