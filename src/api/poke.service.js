import getPoke from "./axios.config";

const cards = "/cards";
const sets = "/sets";

const getAllCards = () => {
    return getPoke.get(`${cards}`);
};

const getAllSets = () => {
    return getPoke.get(`${sets}`);
};



export { getAllCards, getAllSets };