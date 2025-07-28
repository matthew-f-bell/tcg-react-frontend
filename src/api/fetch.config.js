// Library Imports
import axios from "axios";

// const X_API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_ONE_API_URL;

// Create Base Axios Request
const getOne = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default getOne;