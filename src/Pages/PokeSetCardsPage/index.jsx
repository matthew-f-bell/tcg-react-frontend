// Library Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    let pathArray = window.location.pathname.split('/');

    // Query API for Data on a Specific Set
    const [sets, setSets] = useState([]);

    const getSets = async () => {
        await pokeService.getSet(pathArray[2]).then((res) => {
            setSets(res.data.cards)
        })
    };

    useEffect(() => {
        getSets()
    }, []);

    // Render Out Cards in the Set
    return (
        <>
            <Navbar />
            <div className="card-container">
                {sets.map((set) => {
                    return (
                        <>
                            <PokeSetCards cards={set.cards} setCardName={set.name} setCardImage={set.image} />
                        </>
                    )
                })}
            </div>
        </>
    );
};
 
export default PokeSetCardsPage;