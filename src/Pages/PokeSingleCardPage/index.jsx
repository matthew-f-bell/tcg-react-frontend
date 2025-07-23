// Library Imports
import { useState, useEffect } from "react";

// Component Imports
import Navbar from "../../components/Navbar";
import PokeSingleCard from "../../components/PokeSingleCard";

// API Import
import * as pokeService from "../../api/poke.service";

// Style Import
import '../../stylesheets/index.scss';

// Home Page Render
const PokeSingleCardPage = () => {
    // Get Set ID from Path
    let cardPath = window.location.pathname.split('/');

    const [cardDetails, setCardDetails] = useState([]);

    const getCardDetails = async () => {
        await pokeService.getCard(cardPath[2]).then((res) => {
            setCardDetails(res.data)
        })
    };

    useEffect(() => {
        getCardDetails()
    }, []);

    return (
        <>
            <Navbar />
            <PokeSingleCard 
                name={cardDetails.name}
                image={cardDetails.image}
                rarity={cardDetails.rarity}
                hp={cardDetails.hp}
                evolvedFrom={cardDetails.evolveFrom}
                description={cardDetails.description}
                stage={cardDetails.stage}
                attacks={cardDetails.attacks}
                weakness={cardDetails.weaknesses}
             />
        </>
    )
}

export default PokeSingleCardPage;