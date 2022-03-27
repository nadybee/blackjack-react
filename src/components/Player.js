import {useContext} from 'react'




import BlackjackContext from '../context/BlackjackContext'

const Player = () => {
  const {playerHand, calculateHandTotal} =useContext(BlackjackContext)
  // const [playerTotal, setPlayerTotal]= useState(0)
 



  // useEffect(()=> {
  //   setPlayerTotal(calculateHandTotal(playerHand))

  // }, [])
  return (
    <div> 
     <h2>Players hand</h2>
    <div className="hand">
    
    {
      playerHand.map((card)=> (
   <img src={card.image} alt={card.code} key={card.code}/>
 ))
    }
     </div>
    
     <h2>Players total :</h2>
  
    
   
    
    </div>
  )
}

export default Player