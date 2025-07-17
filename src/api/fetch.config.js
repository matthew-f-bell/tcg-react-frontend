

const X_API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_ONE_API_URL;

let onePieaceHeaders = new Headers({
        'x-api-key': X_API_KEY,
        'Content-Type': 'application/json'
});

async function getOne() {
    const url = API_URL;
    
}

/*----
const getOne = axios.create({
    baseURL: 'https://apitcg.com/api/',
    headers: {
        'x-api-key': X_API_KEY,
        'Content-Type': 'application/json'
    }
});

----*/