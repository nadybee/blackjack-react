import React from 'react';

import Header from './components/Header'

import Game from './components/Game';
import {BlackjackProvider} from './context/BlackjackContext'



function App() {
 



  return (
<BlackjackProvider>
    <div className="board">
     <Header/>
     <Game />

    </div>
    </BlackjackProvider>
  );
}

export default App;
