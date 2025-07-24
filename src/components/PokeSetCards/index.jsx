// Library Imports
import { Link } from 'react-router-dom';

// List of Different Pokemon Cards in a Specific Set Component
function PokeSetCards(props) {
    // Set Correct Path to Get Image Asset from API
    let logoURL = props.setCardImage+'/low.jpg';

    // Sets Link to Path to Single Card Details
    let oneCardID = `/pokemon-card/${props.cardID}`;

    // Render Out Card Data
    return(
        <>
            <div className="tcg-card">
                <img src={logoURL} alt="" className="card-img" />
                <div>Card Name: 
                    <Link to={oneCardID} >
                        {props.setCardName}
                    </Link>
                </div>
            </div>
        </>
    )
};

export default PokeSetCards;