import React from 'react';
import Tcgcard from '../TcgCard';
import { useState, useEffect } from 'react';


import * as pokeService from "../../api/poke.service";



// Home Page Component
function Home() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    await pokeService.getAllCards().then((res) => {
      setCards(res.data)
    })
  };

  useEffect(() => {
    getCards()
  }, []);

  const limitedCards = cards.slice(0,20);

  return(
    <>
      <h1>Test</h1>
      <div className="card-container">
      {limitedCards.map((card) => {
        return (
          <>
            <div key={card.Id}>
              <Tcgcard name={card.name} image={card.image} />
            </div>
          </>
        )
      })}
      </div>
    </>
  )
};

export default Home;