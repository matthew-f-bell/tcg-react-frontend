// Library Imports
import { Link } from 'react-router-dom';

// List of different TCG Series
function Series() {
    return(
        <>
            <div className='series-container'>
                <div className="series-card">
                    <Link to="/one-piece-sets">One Piece</Link>
                </div>
                <div className="series-card">
                    <Link to="/pokemon-sets">Pokemon</Link>
                </div>
            </div>
        </>
    );
};

export default Series;