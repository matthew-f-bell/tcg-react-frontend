import React from 'react';

import '../../stylesheets/index.scss';

// Component for Cards
function Tcgcard (props) {
    let logoURL = "";


    if (props.image === undefined) {
        logoURL = "public/assets/staticImages/placeholder_img.png";
    }
    if (props.image !== undefined) {
        logoURL = props.image+"/high.jpg";
    }

    return (
        <>
            <div className="tcg-card">
                <img className="card-img" src={logoURL} alt="" />
                <div>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default Tcgcard ;