import React, { Component } from 'react';
import Region from './region.jsx'
import '../stylesheets/card.css';
import TestIcon from '../images/icons/all-seeing-eye.svg';

class CardImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      iconStyle: this.getIcon()
    }
  }

  getIcon(){
    return {
      backgroundImage: `url(${TestIcon})`
    }
  }

  render() {
    return (
      <div>
          <div className='card-image' style={this.state.iconStyle}></div>
      </div>
    );
  }
}

export default CardImage;
