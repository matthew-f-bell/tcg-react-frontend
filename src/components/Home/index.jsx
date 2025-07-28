// Library Imports
import React from 'react';
import Tcgcard from '../TcgCard';
import { useState, useEffect } from 'react';


// API Import
import * as pokeService from "../../api/poke.service";



// Home Page Component
function Home() {
  // Query API for All Cards
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    await pokeService.getAllCards().then((res) => {
      setCards(res.data)
    })
  };

  useEffect(() => {
    getCards()
  }, []);

  // Removes Any Data That Does Not Have an Image to Display
  let limitedCards = cards.flatMap((card) => {
    if (card.image !== undefined) {
      return [card];
    }
    return [];
  })

  limitedCards = limitedCards.slice(0,20);

  // Render Out 20 Cards as an Example 
  return(
    <>
      <h1>Test</h1>
      <div className="card-container">
      {limitedCards.map((card) => {
        if (card.image === undefined) {
          return null;
        }
        else {
          return (
            <>
              <div key={card.Id}>
                <Tcgcard name={card.name} image={card.image} />
              </div>
            </>
          )}
        })}
      </div>
    </>
  )
};

export default Home;