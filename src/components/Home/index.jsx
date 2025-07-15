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

  return(
    <>
      <h1>Test</h1>
      {cards.map((card) => {
        return (
          <>
            <Tcgcard id={card.localId} name={card.name} image={card.image} />
          </>
        )
      })}
    </>
  )
};

export default Home;