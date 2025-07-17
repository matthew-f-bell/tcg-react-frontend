import getOne from "./axios.config";

const cards = "/one-piece/cards";

const getAllOnePieceCards = () => {
    return getOne.get(`${cards}`);
};

export { getAllOnePieceCards };