import { useContext,useEffect} from 'react';
import Dealer from './Dealer';
import Player from './Player';
import Hit from './buttons/Hit';
import PlaceBet from './buttons/PlaceBet';
import Stay from './buttons/Stay';
import DoubleDown from './buttons/DoubleDown';
import BlackjackContext from '../context/BlackjackContext';

const Game = () => {
  const { playerHand, dealerHand, calculateHandTotal,stay, dealToDealer,deck} =
    useContext(BlackjackContext);
    const dealerTotal= calculateHandTotal(dealerHand)
    const playerTotal = calculateHandTotal(playerHand)

  useEffect(()=> {
    dealing()
    // checkWhoWon()
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])




console.log(dealerTotal)
console.log(playerTotal)
// console.log(dealerHand)
const checkWhoWon =()=>{
  
  if(stay) {
  if (dealerTotal>21){
    console.log('dealer busted, you won!')
  }
    else if(playerTotal>21) {
      console.log('player busted!')
    }
  
  else if(dealerTotal>playerTotal) {
    console.log('dealer Won')

  }
  else if(dealerTotal === playerTotal){
    console.log('push')
  }
else {
  console.log('player won!')
}

}
}

const dealing =() => {
  if(stay){
    dealToDealer(dealerHand, deck) 
    }
   
  }
 

 
  return (
    <div className="game-board">
      <Dealer />
      <Player />
     <div>
     <h1>  {playerTotal} </h1>
  

     </div>
      {/* <button onClick={()=>{firstDeal()
      secondDeal()}} className='bet-button'>Place bet</button>  */}
      {playerHand.length < 1 ? (
        <PlaceBet />
       
      ) : (
        <div className="bet-btns">
          <Hit  />
          <Stay />
          <DoubleDown />
        </div>
      )}
    </div>
  );
      }
export default Game;
