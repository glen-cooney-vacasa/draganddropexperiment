import Helper from '../utilities/helper.js';
import _ from 'lodash';

const MAX_HANDSIZE = 10;
const MIN_HANDSIZE = 0;

class Player {
  constructor() {
    console.log(`Player instance created`);
    this.id = 0;
    this.handSize = 5;

    let testInitHand = _.range(5);

    this.cards = {
      hand: testInitHand,
      deck: [],
      discard: []
    }

    this.enforceRange = Helper.enforceRange.bind(null, MIN_HANDSIZE, MAX_HANDSIZE);
  }

  drawCard(src, amt=1){
    let newHandSize = this.cards.hand.length + amt;

    if(!this.enforceRange(newHandSize)){
      return;
    }

    let newCards = src.giveCard(this.id, amt);
    this.cards.hand.push(newCards);
  }

  // TODO: Enforce hard/soft hand limit
  // adjHandSize(val){
  //   let newHandSize = this.handSize + val;
  //
  //   if(this.enforceRange(newHandSize)){
  //       this.handSize = newHandSize;
  //   }else{
  //     console.warn(`Invalid hand size ${newHandSize}`);
  //   }
  //
  //   return this.handSize;
  // }
}

export default Player;
