import getSeries from "./axios.config";

const onePieceCards = "/one-piece/cards";


const getAll = () => {
    return getSeries.get(`${onePieceCards}/`);
}

const getLuffy = () => {
    return getSeries.get(`${onePieceCards}?name=luffy`)
}

export { getAll, getLuffy };