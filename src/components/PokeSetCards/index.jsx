// Library Imports
import { useState, useEffect } from 'react';

// API Imports
import * as pokeService from "../../api/poke.service";

// List of Different Pokemon Cards in a Specific Set Component
function PokeSetCards(props) {
    // Set Correct Path to Get Image Asset from API
    let logoURL = props.setCardImage+'/high.jpg';

    // Render Out Card Data
    return(
        <>
            <div className="tcg-card">
                <img src={logoURL} alt="" className="card-img" />
                <div>Card Name: {props.setCardName}</div>
            </div>
        </>
    )
};

export default PokeSetCards;