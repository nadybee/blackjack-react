import { useState } from 'react';
import React from 'react';


const Balance = ({deck}) => {
  const [balance, setBalance] = useState(0);
  let average = deck.reduce((acc,curr) => {
    return acc + curr.value
  },0)/deck.length
const handleClick = () => {
  setBalance(average)
}


  return (
    <div>
      <h4>Balance</h4>
      <h1>{balance}</h1>
      <h4>number of Cards</h4>
      <h1>{deck.length}</h1>
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default Balance;
