import { useContext } from 'react';
import CardBack from '../shared/CardBack.js';
import EndHand from './EndHand'


// import Hand from './Hand'

import BlackjackContext from '../context/BlackjackContext';

const Dealer = () => {
  const { dealerHand, stay, player21, dealer21,calculateHandTotal, playerHand} = useContext(BlackjackContext);

  if (!stay && !player21 && !dealer21 && calculateHandTotal(playerHand)<21)
    return (
      <div>
        <h2>Dealer's Hand: ?? </h2>
        <CardBack />
        {dealerHand.slice(1).map((card) => (
          <img src={card.image} alt={card.code} key={card.code} />
        ))}
      </div>
    );
  else
    return (
      <div>
        <h2>Dealer's Hand:  {calculateHandTotal(dealerHand)}</h2>
        {dealerHand.map((card) => (
          <img src={card.image} alt={card.code} key={card.code} />
        
        ))}
      <EndHand />


    
      </div>
    );
};


export default Dealer;
