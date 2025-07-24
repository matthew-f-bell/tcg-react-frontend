// Style Import
import '../../stylesheets/index.scss';

// Details of a Single Card Component
function PokeSingleCard (props) {
    let cardImageURL = props.image+"/high.jpg";

    return (
        <>
            <div className="card-detail-container">
                <span className="card-image-container">
                    <img src={cardImageURL} alt="" className="card-image" />
                </span>
                <span className="card-details">
                    <h1 className="card-name">
                        {props.name}
                    </h1>
                    <h2>Rarity</h2>
                    <div className="rarity">
                        {props.rarity}
                    </div>
                    <h2>Set</h2>
                    <div className="set">
                        {props.setDetails && props.setDetails.name}
                    </div>
                    <h2>HP</h2>
                    <div className="hp">
                        {props.hp}
                    </div>
                    <h2>Evolves From</h2>
                    <div className="stage">
                        {props.stage}
                    </div>
                    <div className="evolved-from">
                        {props.evolvedFrom}
                    </div>
                    <h2>Flavor Text</h2>
                    <div className="description">
                        {props.description}
                    </div>
                </span>
            </div>
        </>
    )

}

export default PokeSingleCard;