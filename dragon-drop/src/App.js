import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

import Card from './components/card.jsx'
import Hand from './components/hand.jsx'
import Region from './components/region.jsx'
import Supply from './components/supply.jsx'
// import Button from './components/button.jsx'
// import { DragDropContext } from 'react-dnd';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        handSize: 5
    }

    this.gainCard = this.gainCard.bind(this);
    this.getHandSize = this.getHandSize.bind(this);
  }

  // TODO create CardActionService
  gainCard(cardType){
    let newHandSize = this.state.handSize + 1;

    this.setState({
      handSize: newHandSize
    });

    console.log(`Hand size is now ${this.state.props.handSize}`);
  }

  // TODO create backend to handle this request instead
  onCardClick(card){
    console.log(`Card "${card.props.text}" clicked`);
  }

  getHandSize(){
    return this.state.handSize;
  }

  supplyCardClicked(card){
    console.log(`Supply card "${card.props.text}" clicked.`);
  }

  render() {
    return (
      <div className="App">
        <Supply
          onCardClick={this.supplyCardClicked}
          cardsVertical={2}
          cardsHorizontal={5}
          ></Supply>
        <Hand
            mode='horizontal'
            onCardClick={this.onCardClick}
            handSize={this.getHandSize()}
        ></Hand>
        <button onClick={this.gainCard}>Gain Card</button>
      </div>
    );
  }
}

export default App;
