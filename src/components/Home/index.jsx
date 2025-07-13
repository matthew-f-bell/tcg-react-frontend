import React from 'react';
import Tcgcard from '../TcgCard';
import { useState, useEffect } from 'react';

import * as onePieceService from "../../api/onepiece.service";



// Home Page Component
function Home() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    await onePieceService.getLuffy().then((res) => {
//      setCards(res.data)
      console.log(res)
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
            <Tcgcard name={card.name} image={card.images.small} />
          </>
        )
      })}
    </>
  )
};

export default Home;