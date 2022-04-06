
import BlackjackContext from '../../context/BlackjackContext'
import {useContext} from 'react'

const Hit = () => {
  const {deck, hitting, player21, drawPlayerCard,calculateHandTotal,playerHand,checkForPlayer21, checkForBust} =useContext(BlackjackContext)
  const playerHandTotal = calculateHandTotal(playerHand)
return  (
    <div>
      <button onClick = {() => {
hitting()
checkForPlayer21()

       }
      }
      > hit </button>
    </div>
)
  
}

export default Hit