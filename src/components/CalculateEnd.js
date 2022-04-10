
import { useContext } from 'react';
import BlackjackContext from '../context/BlackjackContext';
 
const CalculateEnd = () => {
    const {playerWin,dealerWin,push,bet,setBet,setChips} =
    useContext(BlackjackContext);
  
if (playerWin)
{
      setChips((prev) => prev + 20);
 
}
else if (dealerWin) {
 
      setChips((prev) => prev )
}
else if (push)
{
      setChips((prev) => prev+10);
}  
    
    

        }
//      


export default CalculateEnd