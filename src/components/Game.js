import { useContext, useEffect } from 'react';
import Dealer from './Dealer';
import Player from './Player';
// import Hit from './buttons/Hit';
// import PlaceBet from './buttons/PlaceBet';
// import Stay from './buttons/Stay';
// import CalculateEnd from './CalculateEnd';
// import DoubleDown from './buttons/DoubleDown';
import Playing from './Playing';
import Starting from './Starting';
import BlackjackContext from '../context/BlackjackContext';
import EndHand from './EndHand';

const Game = () => {
  const {
    playerHand,
    dealerHand,
    stay,
    dealToDealer,
    deck,
    checkForDealer21,
    checkForPlayer21,
    bet,
    checkForBust,
    handOver
  } = useContext(BlackjackContext);

  useEffect(() => {
  
    checkForDealer21(dealerHand);
    if (stay) {
      dealToDealer(dealerHand, deck);
    }
    checkForBust()

  }, [checkForBust, checkForDealer21, checkForPlayer21, dealToDealer, dealerHand, deck, playerHand, stay]);


console.log(deck.length)
  return (
    <div className="game-board">
      <Dealer />
      <Player />
      { bet===0 && handOver===false ?
      <Starting /> :
      <Playing /> }
  

 
    </div>
  );
};

export default Game;

