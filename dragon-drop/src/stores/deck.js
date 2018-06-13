import _ from 'lodash';

class DeckData {
  constructor(cards=[]){
    this.name = 'Test Deck';
    this.cards = cards;

    this.initialize(this.cards);
  }

  initialize(arr){
    this.cards = _.shuffle(arr);
  }

  shuffle(){
    _.shuffle(this.cards);
  }

  giveCard(id, num){
    if(_.isEmpty(this.cards)){
      console.warn(`Deck '${this.name}' is empty`);
      return [];
    }

    let index = num * -1;
    let result = this.cards.splice(index, num);

    return result;
  }
}

export default DeckData;
