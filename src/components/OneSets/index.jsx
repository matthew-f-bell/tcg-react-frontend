import { useState, useEffect } from 'react';

import * as oneService from "../../api/onepiece.service";

// List of Different One Piece Sets Within a Series Component
function OnePieceSets() {
    const [sets, setSets] = useState([]);

    const getSets = async () => {
        await oneService.getAllOnePieceSets().then((res) => {
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

export default OnePieceSets;