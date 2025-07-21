import axios from "axios";

const POKE_API_URL = process.env.REACT_APP_POKE_API_URL;

const getPoke = axios.create({
    baseURL: POKE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 'https://api.tcgdex.net/v2/en/'

export default getPoke;