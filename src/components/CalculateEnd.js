
import { useContext } from 'react';
import BlackjackContext from '../context/BlackjackContext';
 
const CalculateEnd = () => {
    const {playerHand, dealerHand, calculateHandTotal, stay,player21,dealer21, playerWon, dealerWon, push,resetBet,resetDealerHand,resetPlayerHand,setHandOver} =
    useContext(BlackjackContext);
  
    const dealerTotal = calculateHandTotal(dealerHand);
  const playerTotal = calculateHandTotal(playerHand);
    
     resetDealerHand()
     resetPlayerHand()
     resetBet()

          if (dealerTotal > 21) {
            return playerWon()

     
          } else if (playerTotal > 21) {
        return dealerWon()
     
          } else if (dealerTotal > playerTotal) {
            return dealerWon()
        
          } else if (dealerTotal === playerTotal) {
            return push()

          } else {
          return playerWon()
          
          }
          
        }
//      


export default CalculateEnd