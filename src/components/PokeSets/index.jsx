import { useState, useEffect } from 'react';

import * as pokeService from "../../api/poke.service";

// List of Different Sets Within a Series Component
function PokeSets() {
    const [sets, setSets] = useState([]);

    const getSets = async () => {
        await pokeService.getAllSets().then((res) => {
            setSets(res.data)
        })
    };

    useEffect(() => {
        getSets()
    }, []);

    return(
        <>
            {sets.map((set) => {
                return (
                    <>
                        <div key={set.id}>
                            {set.name}
                        </div>
                    </>
                )
            })}
        </>
    )
};

export default PokeSets;