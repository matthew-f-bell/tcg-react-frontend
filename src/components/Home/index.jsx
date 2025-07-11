import React from 'react';
import Tcgcard from '../TcgCard';
import { useState } from 'react';


function createInitialCards() {
  const initialCardDisplay = [];
  for (let i = 0; i < 5; i++) {
    initialCardDisplay.push({
      id: i,
      card: <Tcgcard />
    });
  }
  return initialCardDisplay;
}

// Home Page Component
function Home() {
  const [cards, setCards] = useState(createInitialCards());

  return(
    <>
      <h1>Test</h1>
      <button onClick={() => {
        setCards([
          {
            id: cards.length,
            card: <Tcgcard />
          }, ...cards]);
      }}>
        Increment Component  
      </button>
      <button onClick={() => {
        setCards([
          {
            id: cards.length,
            card: <Tcgcard />
          }, ...cards]);
      }}>        Decrement Component
      </button>
      <div class="card-container">
        {
          cards.map(item => (
            <div key={item.id}>
              {<Tcgcard />}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Home;