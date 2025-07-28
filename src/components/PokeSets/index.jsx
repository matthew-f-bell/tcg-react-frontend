// Library Imports
import { Link } from 'react-router-dom';

// List of Different Pokemon Sets Within a Series Component
function PokeSets(props) {
    let oneSetID = `/pokemon-sets/${props.id}`;

    return(
        <>
            <div>
                <Link to={oneSetID}>
                    {props.name}
                </Link>
            </div>
        </>
    )
};

export default PokeSets;