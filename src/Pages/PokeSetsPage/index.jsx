// Library Imports
import { useState, useEffect } from 'react';

// Component Imports
import Navbar from "../../components/Navbar";
import PokeSets from "../../components/PokeSets";

// API Imports
import * as pokeService from "../../api/poke.service";

// Style Import
import '../../stylesheets/index.scss';

// Page For Listing All Sets Within a Series
function PokeSetsPage() {

    // Getting List of Sets from API
    const [sets, setSets] = useState([]);

    const getSets = async () => {
        await pokeService.getAllSets().then((res) => {
            setSets(res.data)
        })
    };

    useEffect(() => {
        getSets()
    }, []);

    return (
        <>
            <Navbar />
            {sets.map((set) => {
                return (
                    <>
                            <PokeSets id={set.id} name={set.name} />
                    </>
                )
            })}
        </>
    );
};
 
export default PokeSetsPage;