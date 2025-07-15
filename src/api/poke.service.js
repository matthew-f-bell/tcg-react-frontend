import getPoke from "./axios.config";

const cards = "/cards";

const getAllCards = () => {
    return getPoke.get(`${cards}`);
};



export { getAllCards };