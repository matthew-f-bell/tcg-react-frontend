import axios from "axios";



const getPoke = axios.create({
    baseURL: 'https://api.tcgdex.net/v2/en/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default getPoke;