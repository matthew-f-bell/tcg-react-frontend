// Axios Configuration for Pokemon TCG API
import getPoke from "./axios.config";

// API Endpoint Pointers
const cards = "/cards";
const sets = "/sets";

// Gets All TCG Cards Regardless of Set
const getAllCards = () => {
    return getPoke.get(`${cards}`);
};

// Gets All Sets
const getAllSets = () => {
    return getPoke.get(`${sets}`);
};

// Gets All Cards Within a Set
const getSet = (id) => {
    return getPoke.get(`${sets}/${id}`);
};


export { getAllCards, getAllSets, getSet };