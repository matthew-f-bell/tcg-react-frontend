import axios from "axios";


const api_key = process.env.REACT_APP_API_KEY;

const getSeries = axios.create({
    baseURL: 'https://apitcg.com/api',
    headers: {
        'X-API-KEY': `${api_key}`,
        'Content-Type': 'application/json'
    }
});

export default getSeries;