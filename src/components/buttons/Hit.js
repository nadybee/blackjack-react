
import BlackjackContext from '../../context/BlackjackContext'
import {useContext} from 'react'

const Hit = () => {
  const {deck, hitting, drawPlayerCard} =useContext(BlackjackContext)
 
  return (
    <div>
      <button onClick = {() => {hitting()
      drawPlayerCard(deck) }}
      > hit </button>
    </div>
  )
}

export default Hit