import React, { Component } from 'react';
import PizzaOven from '../images/pizzaoven.jpg';

class Description extends Component {
  render () {
    return (
      <div className="description" id="description">
        <img src = {PizzaOven} alt='PizzaOven' />
        <p>Pommy ipsum by 'eck love blummin' got his end away what a load of guff pompous, Time Lord bent as a nine bob note knackered damn smeg. The Hounds of Baskerville smeg pork scratchings ended up brown bread completely crackers in the goolies hard cheese old boy scatterbrained, queer as a clockwork orange spiffing in a pickle the chippy cup of tea picalilly, cotton on scrumpy flog a dead horse what a load of guff pulled a right corker 'tis. On his tod good old fashioned knees up naff done up like a kipper Essex girls, River Song the lakes. Ask your mother if a right royal knees up squirrel marmite it's cracking flags pezzy little cor blimey', penny-dreadful it's me peepers in a pickle absolute. </p>
      </div>
    );
  }
}

export default Description;