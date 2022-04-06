import BlackjackContext from '../../context/BlackjackContext';
import { useContext, useEffect } from 'react';

const PlaceBet = () => {
  const { firstDeal, secondDeal, checkForPlayer21, playerHand, setHandOver,checkForDealer21, dealerHand, betting, resetDealerHand,resetPlayerHand,setStay,setPlayer21, setDealer21,checkForBust} = useContext(BlackjackContext);
  useEffect(()=> {
    checkForPlayer21(playerHand)
    checkForDealer21(dealerHand)


  },[])
 return (

    <div>
      <button
        onClick={() => {
         resetDealerHand()
         resetPlayerHand()
          firstDeal();
          secondDeal();
          betting()
          setStay(false)
          checkForPlayer21(playerHand)
          checkForDealer21(dealerHand)
          setHandOver(false)
          setDealer21(false)
          setPlayer21(false)
     
         

        }}
        className="bet-button"
      >
        Place $10 bet
      </button>
    </div>
  );
};


export default PlaceBet;
