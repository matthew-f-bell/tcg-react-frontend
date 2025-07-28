// Library Imports
import React from 'react';

// Style Import
import '../../stylesheets/index.scss';

// Component for Cards
function Tcgcard (props) {
    let logoURL = "";

    // If Data Does Not Have an Image to Display, Display a Filler Image
    if (props.image === undefined) {
        logoURL = "https://assets.tcgdex.net/en/base/base1/98/low.jpg";
    }
    else if (props.image !== undefined) {
        logoURL = props.image+"/low.jpg";
    }

    // Render Out a Cards Name and Image
    return (
        <>
            <div className="tcg-card">
                <div className="card-img-container">
                    <img className="card-img" src={logoURL} alt="" />
                </div>
                <div>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default Tcgcard ;