import React, { Component } from 'react';
import '../stylesheets/region.css';
import classNames from 'classnames';
import _ from 'lodash';

class Region extends Component {
  constructor(props){
    super(props);

    this.state = {
      styles: this.getRegionStyles()
    }

    // this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event){
      console.log(`hovering over region`);
  }

  getRegionStyles(){
    return {
      display: 'inline-block',
      position: this.props.overlap ? 'absolute' : 'relative',
      transformOrigin: `${this.props.originX}% ${this.props.originY}%`,
      msTransformOrigin:`${this.props.originX}% ${this.props.originY}%`,
      WebkitTransformOrigin:`${this.props.originX}% ${this.props.originY}%`,
      transform: `rotate(${this.props.angle}deg)`,
      msTransform: `rotate(${this.props.angle}deg)`,
      WebkitTransform: `rotate(${this.props.angle}deg)`
    }
  }

  render() {
    var containerStyles = classNames("region-container", "card-shape");
    var regionStyles = classNames({
      "region": true,
      "blank-region": _.isEmpty(this.props.children)
    })

    return (
      <div className={containerStyles} style = {this.state.styles} >
        <div className={regionStyles}
             onMouseEnter={this.handleHover}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Region;
