import React from 'react';

import '../../stylesheets/index.scss';

// Component for Cards
function Tcgcard (props) {
    return (
        <>
            <div className="tcg-card" key={props.id}>
                <img src={props.image} alt="" />
                <div>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default Tcgcard ;