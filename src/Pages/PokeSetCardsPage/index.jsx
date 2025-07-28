// Library Imports
import { useState, useEffect } from 'react';

// Component Imports
import Navbar from "../../components/Navbar";
import PokeSetCards from '../../components/PokeSetCards';

// API Imports
import * as pokeService from "../../api/poke.service";

// Style Import
import '../../stylesheets/index.scss';

// Page For Listing Cards Within a Specific Set
function PokeSetCardsPage() {
    // Get Set ID from Path
    let setPath = window.location.pathname.split('/');

    // Query API for Data on a Specific Set
    const [setCards, setSetCards] = useState([]);

    const getSetCards = async () => {
        await pokeService.getSet(setPath[2]).then((res) => {
            setSetCards(res.data.cards)
        })
    };

    useEffect(() => {
        getSetCards()
    }, []);

    // Render Out Cards in the Set
    return (
        <>
            <Navbar />
            <div className="card-container">
                {setCards.map((setCard) => {
                    return (
                        <>
                           <PokeSetCards cardID={setCard.id} setCardName={setCard.name} setCardImage={setCard.image} />
                        </>
                    )
                })}
            </div>
        </>
    );
};
 
export default PokeSetCardsPage;