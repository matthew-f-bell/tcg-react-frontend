import axios from "axios";

const POKE_API_URL = process.env.REACT_APP_POKE_API_URL;

const getPoke = axios.create({
    baseURL: 'https://api.tcgdex.net/v2/en/',
    headers: {
        'Content-Type': 'application/json'
    }
});



export default getPoke;