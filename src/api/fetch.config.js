import axios from "axios";

// const X_API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_ONE_API_URL;




/*-----

// url = 'https://apitcg.com/api/'

const onePieceHeaders = new Headers({
    'x-api-key': X_API_KEY,
    'Content-Type': 'application/json'
});


const onePieceResponse = await fetch(`${API_URL}one-piece`, {
    headers: onePieceHeaders,
})

export default onePieceResponse;

-----*/

const getOne = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default getOne;