import { createContext, useState, useEffect } from 'react';
const BlackjackContext = createContext();

export const BlackjackProvider = ({ children }) => {
  // const [deckId, setDeckId] = useState('')
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [hit, setHit] = useState(false);
  const [stay, setStay] = useState(false);
  const [dealer21, setDealer21] = useState(false);
  const [player21, setPlayer21] = useState(false);
  // const [chips, setChips] = useState(100)
  // const  [doubleDown]= useState(false)

  useEffect(() => {
    fetchDeck();
  }, []);

  // console.log(deck);

  //get deck of cards from deckofcardsapi.com
  const fetchDeck = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=52`
    );
    const data = await response.json();
    setDeck(data.cards);
  };
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

  //starting game
  const firstDeal = () => {
    drawDealerCard(deck);
    drawPlayerCard(deck);
  };

  const secondDeal = () => {
    drawDealerCard(deck);
    drawPlayerCard(deck);
  };

  

  const checkForPlayer21 = (hand) => {
    if (calculateHandTotal(hand) === 21) {
      setPlayer21(true)
    
    }
  };

  //calcuates a hand
  const calculateHandTotal = (hand) => {
    let aceArr = [];
    let subtotal = 0;
    let total = 0;

    for (let i = 0; i < hand.length; i++) {
      if (hand[i].value === 'ACE') {
        aceArr.push(hand[i]);
      }
    }

    for (let j = 0; j < hand.length; j++) {
      if (
        hand[j].value === 'KING' ||
        hand[j].value === 'QUEEN' ||
        hand[j].value === 'JACK'
      ) {
        hand[j].value = 10;
      } else if (hand[j].value === 'ACE') {
        hand[j].value = 1;
      }
      subtotal += Number(hand[j].value);
    }

    for (let k = 0; k < hand.length; k++) {
      if (
        hand[k].value === 'KING' ||
        hand[k].value === 'QUEEN' ||
        hand[k].value === 'JACK'
      ) {
        hand[k].value = 10;
      } else if (hand[k].value === 'ACE') {
        hand.value = 1;
      }
      total += Number(hand[k].value);
    }
    if (aceArr.length > 0 && subtotal <= 11) {
      total += 10;
    }
    return total;
  };
  //player takes a hit
  const hitting = () => {
    setHit(true);
  };

  // player stays

  const staying = () => {
    setStay(true);
   
  };

  return (
    <BlackjackContext.Provider
      value={{
        deck,
        dealerHand,
        playerHand,
        player21,
        dealer21,
        hit,
        stay,
        checkForPlayer21,
        // checkForDealer21,
        dealToDealer,
        drawDealerCard,
        drawPlayerCard,
        firstDeal,
        secondDeal,
        calculateHandTotal,
        hitting,
        staying,
      }}
    >
      {children}
    </BlackjackContext.Provider>
  );
};

export default BlackjackContext;
