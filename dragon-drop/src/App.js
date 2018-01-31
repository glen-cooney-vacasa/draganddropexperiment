import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

import Card from './components/card.jsx'
import Hand from './components/hand.jsx'
import Region from './components/region.jsx'
// import Button from './components/button.jsx'
// import { DragDropContext } from 'react-dnd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hand mode='horizontal'></Hand>
      </div>
    );
  }
}

export default App;
