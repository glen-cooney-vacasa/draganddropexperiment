import React, { Component } from 'react';
import Region from './region.jsx'
import '../stylesheets/card.css';
import TestIcon from '../images/icons/all-seeing-eye.svg';

class CardImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      iconStyle: this.getIconStyle()
    }
  }

  getIconStyle(){
    return {
      backgroundImage: `url(${TestIcon})`,
      width: 80,
      height: 80,
      margin: `auto`,
      backgroundPosition: `center center`,
      backgroundRepeat: `no-repeat`
    }
  }

  render() {
    return (
      <div className="CardImage">
          <div className='IconsTest' style={this.state.iconStyle}></div>
      </div>
    );
  }
}

export default CardImage;
