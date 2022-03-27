import BlackjackContext from '../../context/BlackjackContext';
import { useContext } from 'react';

const PlaceBet = () => {
  const { firstDeal, secondDeal, checkForPlayer21, playerHand} = useContext(BlackjackContext);

  return (
    <div>
      <button
        onClick={() => {
          firstDeal();
          secondDeal();
          // checkForDealer21(dealerHand,calculateHandTotal)
          // checkForPlayer21(playerHand)

        }}
        className="bet-button"
      >
        Place bet
      </button>
    </div>
  );
};

export default PlaceBet;
