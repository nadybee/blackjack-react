import { useContext } from "react";
import BlackjackContext from "../context/BlackjackContext";
import Hit from "./buttons/Hit";
import PlaceBet from "./buttons/PlaceBet";
import Stay from "./buttons/Stay";
// import CalculateEnd from "./CalculateEnd";
import DoubleDown from "./buttons/DoubleDown";
import EndHand from './EndHand'

const Playing = () => {
  const {handOver,calculateHandTotal, playerHand, stay} =
    useContext(BlackjackContext);

    return(handOver || stay) ? (
      // <EndHand />,
    <PlaceBet />
) :
(
    <div className="bet-btns">
      <Hit />
      <Stay />
      <DoubleDown />
    </div>

)
};


export default Playing;
