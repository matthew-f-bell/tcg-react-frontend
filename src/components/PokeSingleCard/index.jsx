function PokeSingleCard (props) {
    return (
        <>
            <div className="card-detail-container">
                <img src={props} alt="" className="card-image" />
            </div>
        </>
    )

}

export default PokeSingleCard;