import { useState, useEffect } from 'react';

import * as pokeService from "../../api/poke.service";

// Series Component
function Series() {
    const [series, setSeries] = useState([]);

    const getSeries = async () => {
        await pokeService.getAllSets().then((res) => {
            setSeries(res.data)
        })
    };

    useEffect(() => {
        getSeries()
    }, []);

    return(
        <>
            {series.map((serie) => {
                return (
                    <>
                        <div key={serie.id}>
                            {serie.name}
                        </div>
                    </>
                )
            })}
        </>
    )
};

export default Series;