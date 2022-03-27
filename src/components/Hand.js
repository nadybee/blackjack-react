import {useContext} from 'react'

import BlackjackContext from '../context/BlackjackContext'
import CardBack from '../shared/CardBack.js'


const Hand = (hand) => {
  const {dealerHand} =useContext(BlackjackContext)
  return (
<div className ="hand">

  <CardBack />
 {
   hand.slice(1).map((card)=> (
     <img src={card.image} alt={card.code} key={card.code}/>
   ))
 
 
 }
 
</div>
  )

}
export default Hand