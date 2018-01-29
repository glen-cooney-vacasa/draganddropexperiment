import React, { Component } from 'react';
import Region from './region.jsx'
import '../stylesheets/card.css';
import TestIcon from '../images/icons/all-seeing-eye.svg';

class Card extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      hover: false,
      toggleSpin: false,
      cardStyles: Object.assign({}, this.getCardStyle(), this.getTransform()),
      iconStyle: this.getIconStyle()
    }
  }

  toggleHover(){
    this.setState({
      hover: !this.state.hover,
      cardStyles: Object.assign({}, this.getCardStyle(), this.getTransform())
    });
  };

  getCardStyle(){
    var borderColor = 'black';

    if(this.state){
      if(!this.state.hover){
        borderColor = 'yellow';
      }
    }

    return {
      // width: '100px',
      // height: '150px',
      // border: `5px solid ${borderColor}`,
      backgroundColor: 'blue',
      // borderRadius: '8px',
      // float: `left`,
      // position: 'absolute',
      transformOrigin: `${this.props.originX}% ${this.props.originY}%`,
      msTransformOrigin:`${this.props.originX}% ${this.props.originY}%`,
      WebkitTransformOrigin:`${this.props.originX}% ${this.props.originY}%`
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

  getTransform(){
    return {
      transform: `rotate(${this.props.angle}deg)`,
      msTransform: `rotate(${this.props.angle}deg)`,
      WebkitTransform: `rotate(${this.props.angle}deg)`
    }
  }

  handleClick(){
    let toggle = (this.state.toggleSpin ? false : true);
    let styles = {};

    if(toggle){
      styles = Object.assign({}, this.getCardStyle(), this.getTransform());
    }else{
      styles = this.getCardStyle();
    }

    this.setState({
      toggleSpin: toggle,
      cardStyles: styles
    });
  }

  render() {
    return (
      <div className="Card">
        <Region style={this.state.cardStyles}
               onClick={this.handleClick}
               onMouseEnter={this.toggleHover}
               onMouseLeave={this.toggleHover}>
             <div className='IconsTest' style={this.state.iconStyle}></div>
             {this.props.text}
        </Region>

      </div>
    );
  }
}

export default Card;
