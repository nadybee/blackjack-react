import { createContext, useState, useEffect } from "react";
const BlackjackContext = createContext();

export const BlackjackProvider = ({ children }) => {
  // const [deckId, setDeckId] = useState('')
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [stay, setStay] = useState(false);
  const [dealer21, setDealer21] = useState(false);
  const [player21, setPlayer21] = useState(false);
  const [chips, setChips] = useState(100);
  const [bet, setBet] = useState(0);
  const [handOver, setHandOver] = useState(false);
  const [dealerWin, setDealerWin] = useState(false)
  const [playerWin, setPlayerWin] =useState(false)
  const[push,setPush] = useState(false)
  // const  [doubleDown]= useState(false)

  useEffect(() => {
    if (deck.length<8) {
    fetchDeck();
    }
  });

  //get deck of cards from deckofcardsapi.com
  async function fetchDeck() {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=52`
    );
    const data = await response.json();
    setDeck(data.cards);
    console.log('new deck')
  }
  //draw card to dealer
  const drawDealerCard = (deck) => {
    setDealerHand((arr) => [...arr, deck.pop()]);
  };
  //draw card to player
  const drawPlayerCard = (deck) => {
    setPlayerHand((arr) => [...arr, deck.pop()]);
  };

  // deal third deal to dealer

  const dealToDealer = (dealerHand, deck) => {
    if (calculateHandTotal(dealerHand) <= 16) {
      drawDealerCard(deck);
    }
  };
  // set start game
  // const startRound = () => {
  //   setRound(true);
  // };
  //starting game
  const firstDeal = () => {
    drawDealerCard(deck);
    drawPlayerCard(deck);
  };

  const secondDeal = () => {
    drawDealerCard(deck);
    drawPlayerCard(deck);
  };

  //set state if player has blackjack
  const checkForPlayer21 = () => {
    let aceArr = []
    for (let i = 0; i < playerHand.length; i++) {
      if (
        playerHand[i].code === "AD" ||
        playerHand[i].code === "AS" ||
        playerHand[i].code === "AH" ||
        playerHand[i].code === "AC"
      ) {
        aceArr.push(playerHand[i]);
      }
    }

    if (calculateHandTotal(playerHand) === 21 && aceArr.length>0 && playerHand.length===2) {
      setPlayer21(true);
      setHandOver(true)
      setChips((prev) => prev + 30);

    }
  };

  //set state if dealer has blackjack
  const checkForDealer21 = () => {
    let aceArr = []
    for (let i = 0; i < dealerHand.length; i++) {
      if (
        dealerHand[i].code === "AD" ||
        dealerHand[i].code === "AS" ||
        dealerHand[i].code === "AH" ||
        dealerHand[i].code === "AC"
      ) {
        aceArr.push(dealerHand[i]);
      }
    }
    if ( !player21 && calculateHandTotal(dealerHand) === 21 && aceArr.length>0 && dealerHand.length===2) {
      setDealer21(true);
      setHandOver(true)
    
    }

  };

  //checks if player busts

  const checkForBust =()=>{
    if(calculateHandTotal(playerHand)>21){
     setStay(true)


    }
  }

  //calcuates a hand
  const calculateHandTotal = (hand) => {
    let aceArr = [];
    let subtotal = 0;
    let total = 0;

    for (let i = 0; i < hand.length; i++) {
      if (
        hand[i].code === "AD" ||
        hand[i].code === "AS" ||
        hand[i].code === "AH" ||
        hand[i].code === "AC"
      ) {
        aceArr.push(hand[i]);
      }
    }

    for (let j = 0; j < hand.length; j++) {
      if (
        hand[j].value === "KING" ||
        hand[j].value === "QUEEN" ||
        hand[j].value === "JACK"
      ) {
        hand[j].value = 10;
      } else if (hand[j].value === "ACE") {
        hand[j].value = 1;
      }
      subtotal += Number(hand[j].value);
    }

    for (let k = 0; k < hand.length; k++) {
      if (
        hand[k].value === "KING" ||
        hand[k].value === "QUEEN" ||
        hand[k].value === "JACK"
      ) {
        hand[k].value = 10;
      } else if (hand[k].value === "ACE") {
        hand.value = 1;
      }
      total += Number(hand[k].value);
    }
    if (aceArr.length > 0 && subtotal <= 11) {
      total += 10;
    }
    return total;
  };

  // player stays

  const staying = () => {
    setStay(true);
    // setRound(false);
  };

  // handling hitting

  const hitting =() => { 
    if (!player21 && calculateHandTotal(playerHand)<21) {
          drawPlayerCard(deck) 
  
        
      }
      else{
        setHandOver(true)
      }
    }

  

 
  const resetBet = () => {
    setBet(0);
  };

  //place bet
  const betting = () => {
    setBet(10);
    setChips((prev) => prev - 10);
  };

  const resetPlayerHand = () => {
    setPlayerHand([]);
  };
  const resetDealerHand = () => {
    setDealerHand([]);
  };

  const payUp =()=>{
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





  return (
    <BlackjackContext.Provider
      value={{
        deck,
        dealerHand,
        playerHand,
        player21,
        dealer21,
        stay,
        chips,
        bet,
        handOver,
        dealerWin,
        playerWin,
        push,
        setPlayerWin,
        setDealerWin,
        setPush,
        setBet,
        setStay,
        setChips,
        setDealer21,
        setPlayer21,
        checkForPlayer21,
        checkForDealer21,
        checkForBust,
        setHandOver,
        dealToDealer,
        drawDealerCard,
        drawPlayerCard,
        firstDeal,
        secondDeal,
        calculateHandTotal,
        hitting,
        staying,
        betting,
        payUp,
        // divy,
        // setRound,
        // playerWon,
        // dealerWon,
        // pushed,
        resetBet,
        resetDealerHand,
        resetPlayerHand,
      }}
    >
      {children}
    </BlackjackContext.Provider>
  );
};

export default BlackjackContext;
