import { useContext } from 'react';
import CardBack from '../shared/CardBack.js';


// import Hand from './Hand'

import BlackjackContext from '../context/BlackjackContext';

const Dealer = () => {
  const { dealerHand, stay } = useContext(BlackjackContext);

if (!stay) return (
<div className="hand">
<CardBack /> 
    {dealerHand
      .slice(1)
      .map((card) => <img src={card.image} alt={card.code} key={card.code} />
      )} 
      </div>
)
else return (
  <div className="hand">

    {dealerHand
      .map((card) => <img src={card.image} alt={card.code} key={card.code} />
      )} 
      </div>

)
};


export default Dealer;
