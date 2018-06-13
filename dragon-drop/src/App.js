import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

import Card from './components/card.jsx'
import Hand from './components/hand.jsx'
import Region from './components/region.jsx'
import Supply from './components/supply.jsx'
import Deck from './components/deck.jsx'
// import Button from './components/button.jsx'
// import { DragDropContext } from 'react-dnd';

import Player from './stores/player.js';
import DeckData from './stores/deck.js';

import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);

    let testCards = _.range(25);

    this.state = {
        handSize: -1,
        player: new Player(),
        deck: new DeckData(testCards)
    }

    this.gainCard = this.gainCard.bind(this);
    this.getHandSize = this.getHandSize.bind(this);
  }

  componentDidMount(){
    this.setState({
      handSize: this.state.player.cards.hand.length
    });
  }

  gainCard(){
    console.log(`Card drawn`);
    this.state.player.drawCard(this.state.deck);
  }

  // TODO create backend to handle this request instead
  onCardClick(card){
    console.log(`Card "${card.props.text}" clicked`);
  }

  getHandSize(){
    return this.state.player.cards.hand.length
    // return this.state.handSize;
  }

  // supplyCardClicked(card){
  //
  // }

  render() {
    return (
      <div className="App">
        <Deck></Deck>
        {/*<Supply
          onCardClick={this.supplyCardClicked}
          cardsVertical={2}
          cardsHorizontal={5}
          ></Supply>*/}
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
