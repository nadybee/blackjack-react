import BlackjackContext from '../../context/BlackjackContext'
import {useContext} from 'react'



const Stay = () => {
  const {staying} = useContext(BlackjackContext)


  return (
    <div>
    
      <button onClick ={ ()=>{
                          staying()
                
                          
                            }
} >stay</button>
    </div>
  )
}

export default Stay