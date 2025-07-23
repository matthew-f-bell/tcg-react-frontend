function PokeSingleCard (props) {
    let cardImageURL = props.image+"/high.jpg";
    return (
        <>
            <div className="card-detail-container">
                <img src={cardImageURL} alt="" className="card-image" />
                <span>
                    {props.name}
                    {props.rarity}
                    {props.hp}
                    {props.evolvedFrom}
                    {props.description}
                    {props.stage}
                </span>
            </div>
        </>
    )

}

export default PokeSingleCard;