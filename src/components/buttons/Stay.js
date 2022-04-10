import BlackjackContext from "../../context/BlackjackContext";
import { useContext } from "react";



const Stay = () => {
  const { staying, setHandOver, divy } = useContext(BlackjackContext);

  return (
    <div>
      <button
        onClick={() => {
          staying();
          setHandOver(true);
          // divy()
          
        }}
      >
        stay

      </button>

    </div>

  );

};

export default Stay;
