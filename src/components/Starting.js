import {useContext} from 'react'
import BlackjackContext from '../context/BlackjackContext';
// import Hit from './buttons/Hit';
// import PlaceBet from './buttons/PlaceBet';
// import Stay from './buttons/Stay';
// import CalculateEnd from './CalculateEnd';
// import DoubleDown from './buttons/DoubleDown';

const Starting = () => {
  
        const {
            playerHand,
            dealerHand,
            checkForDealer21,
            checkForPlayer21,
            firstDeal,
            secondDeal,
            betting
           
          } = useContext(BlackjackContext);

  
          return (  
            <div>
              <button
                onClick={() => {
                 
                  firstDeal();
                  secondDeal();
                  betting()
                  checkForPlayer21(playerHand)
                  checkForDealer21(dealerHand)
        
                }}
                className="bet-button"
              >
              Start Game
              </button>
            </div>
          );
   
}

export default Starting