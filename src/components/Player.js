import { useContext } from 'react';

import BlackjackContext from '../context/BlackjackContext';

const Player = () => {
  const { playerHand, calculateHandTotal, chips } =
    useContext(BlackjackContext);
  return (
    <div>
      <h2>Player's Hand:  {calculateHandTotal(playerHand)}</h2>
      <div className="hand">
        {playerHand.map((card) => (
          <img src={card.image} alt={card.code} key={card.code} />
        ))}
      </div>
      <br />
      <div className="inline">
        <h2>Chips: {chips} </h2>
      
      </div>
    </div>
  );
};

export default Player;
