import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import sizeMe from 'react-sizeme'

import '../stylesheets/region.css';


class Region extends Component {
  constructor(props){
    super(props);

    this.state = {
      parentStyle: this.props.style
    }
  }

  // TODO fix later for "traditional" hand layout
  // getRegionStyles(){
  //   let offset = this.props.index * this.props.size.width;
  //
  //   return {
  //     transformOrigin: `${this.props.originX}% ${this.props.originY}%`,
  //     msTransformOrigin:`${this.props.originX}% ${this.props.originY}%`,
  //     WebkitTransformOrigin:`${this.props.originX}% ${this.props.originY}%`,
  //     transform: `rotate(${this.props.angle}deg)`,
  //     msTransform: `rotate(${this.props.angle}deg)`,
  //     WebkitTransform: `rotate(${this.props.angle}deg)`
  //   }
  // }

  render() {
    var containerStyles = classNames("region-container", "card-shape");
    var regionStyles = classNames({
      "blank-region": _.isEmpty(this.props.children)
    });

    return (
      <div className={containerStyles} style = {this.state.parentStyle}>
        <div className={regionStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default sizeMe()(Region);
