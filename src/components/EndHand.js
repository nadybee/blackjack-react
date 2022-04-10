import { useContext, useEffect } from "react";

import BlackjackContext from "../context/BlackjackContext";

const EndHand = () => {
  const {
    calculateHandTotal,
    playerHand,
    dealerHand,
    stay,
    player21,
    dealer21,
    setHandOver,
    checkForBust,
    playerWin,
    dealerWin,
    push,
    setPlayerWin,
    setDealerWin,
    setPush,
    setChips
  } = useContext(BlackjackContext);

  const dealerTotal = calculateHandTotal(dealerHand);
  const playerTotal = calculateHandTotal(playerHand);

  const showResults = () => {
    if (dealerTotal > 21) {
      return <h3>'dealer busted, you won!'</h3>;
    } else if (playerTotal > 21) {
      //  dealerWon()
      return <h3>'You Busted!'</h3>;
    } else if (dealerTotal > playerTotal) {
      // dealerWon()
      return <h3>'Dealer Won!'</h3>;
    } else if (dealerTotal === playerTotal) {
      // push()
      return <h3>'It's a push'</h3>;
    } else if (playerTotal === 21) {
      return <h3> 'You Won!'</h3>;
    } else {
      //  playerWon()
      return <h3>'You won!'</h3>;
    }
  };

  const setResults = () => {
    if (dealerTotal > 21) {
      setPlayerWin(true);
    } else if (playerTotal > 21) {
      setDealerWin(true);
    } else if (dealerTotal > playerTotal) {
      setDealerWin(true);
    } else if (dealerTotal === playerTotal) {
      setPush(true);
    } else if (playerTotal === 21) {
      setPlayerWin(true);
    } 
    else if (playerTotal<22 && playerTotal>dealerTotal) {
      setPlayerWin(true);
    }
  };


useEffect(()=>{
  if (stay || player21 || dealer21 || playerTotal > 21) {
    setResults()
   
  }
},[])



  if (stay || player21 || dealer21 || playerTotal > 21) 
  return (
  <>
    {showResults()}
    {/* {setResults()} */}
  </>
  )

  
};

export default EndHand;
