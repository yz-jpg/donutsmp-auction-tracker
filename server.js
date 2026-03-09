import axios from 'axios';
import dotenv from 'dotenv';    


dotenv.config();  


const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error('Error: API_KEY is not set in .env file');
    process.exit(1);
}       

const app = require('express')();

const api = axios.create({
    baseURL: 'https://localhost:3000/Prices/prices.html'
});


class 
