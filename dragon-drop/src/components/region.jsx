import React, { Component } from 'react';
import '../stylesheets/region.css';
import classNames from 'classnames';
import _ from 'lodash';

class Region extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var containerStyles = classNames("region-container", "card-shape");
    var regionStyles = classNames({
      "region": true,
      "blank-region": _.isEmpty(this.props.children)
    })

    return (
      <div className={containerStyles}>
        <div className={regionStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Region;
