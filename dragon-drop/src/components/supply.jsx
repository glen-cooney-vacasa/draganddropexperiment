import React, {Component} from 'react';
import _ from 'lodash';
import Card from './card.jsx'

class Supply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsHorizontal: this.props.cardsHorizontal,
      cardsVertical: this.props.cardsVertical
    }
  }

  supplyCardClicked(event) {
    console.log(`Supply Card ${this.event.target} clicked`);
  }

  generateSupply() {
    let width = this.state.cardsHorizontal;
    let height = this.state.cardsVertical;
    var key = 0;

    let supply = _.times(height, ()=>{
      let row = _.times(width, () => {
        key += 1;
        return (
          <Card
            key={`s${key}`}
            text={`Supply card ${key}`}
            onCardClick={this.props.onCardClick}
            >
          </Card>
        );
      });

      row.push(<div className="separator" key={`separator${key}`}></div>);

      return row;
    });

    return supply;
  }

  render() {
    const supply = this.generateSupply();

    return (
      <div className="supply">
        {supply}
      </div>
    )
  }
}

export default Supply;
