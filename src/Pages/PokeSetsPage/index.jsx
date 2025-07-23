// Library Imports
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Component Imports
import Navbar from "../../components/Navbar";
import PokeSets from "../../components/PokeSets";

// API Imports
import * as pokeService from "../../api/poke.service";

// Style Import
import '../../stylesheets/index.scss';

// Page For Listing All Sets Within a Series
function PokeSetsPage() {
    // Setting Up Dynamic Routes
    let { setID } = useParams();

    // Getting List of Sets from API
    const [sets, setSets] = useState([]);

    const getSets = async () => {
        await pokeService.getAllSets().then((res) => {
            setSets(res.data)
        })
    };

    useEffect(() => {
        getSets()
    }, [setID]);

    

    return (
        <>
            <Navbar />
            {sets.map((set) => {
                let oneSetID = `/pokemon-sets/${set.id}`;
                return (
                    <>
                        <Link to={oneSetID}>
                            <PokeSets id={set.id} name={set.name} />
                        </Link>
                    </>
                )
            })}
        </>
    );
};
 
export default PokeSetsPage;