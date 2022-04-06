import { useContext } from 'react';

import BlackjackContext from '../context/BlackjackContext';


const EndHand = () => {
  const { calculateHandTotal, playerHand, dealerHand, stay,player21,dealer21,setHandOver, checkForBust} =
  useContext(BlackjackContext);

  const dealerTotal = calculateHandTotal(dealerHand);
  const playerTotal = calculateHandTotal(playerHand);
  if(stay || player21 || dealer21 || playerTotal>21 ) {
 
        if (dealerTotal > 21) {
          // playerWon()
          return <h3>'dealer busted, you won!'</h3>   
          ;
        } else if (playerTotal > 21) {
        //  dealerWon()
          return <h3>'You Busted!'</h3>;
      
        } else if (dealerTotal > playerTotal) {
          // dealerWon()
          return <h3>'Dealer Won!'</h3>;
        } else if (dealerTotal === playerTotal) {
          // push()
          return <h3>'It's a push'</h3>;
        } else {
        //  playerWon()
          return <h3>'You won!'</h3>;
        }
      
    };
 

}
  


export default EndHand