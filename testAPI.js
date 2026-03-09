require('dotenv').config();
const axios = require('axios');

const baseURL = 'https://api.donutsmp.net/v1/auction/transactions/1';
const key = process.env.API_KEY;

function shortInfo(data) {
    if (Array.isArray(data)) return `array(${data.length})`;
    if (data && typeof data === 'object') return `object(keys=${Object.keys(data).length})`;
    return String(data);
}

(async function main() {
    console.log('Requesting with Authorization: Bearer <API_KEY>');
    try {
        const res = await axios.get(baseURL, { headers: { Authorization: `Bearer ${key}` } });
        console.log('Status:', res.status);
        console.log('Body summary:', shortInfo(res.data));
        console.log(JSON.stringify(res.data, null, 2));
    } catch (err) {
        if (err.response) {
            console.error('Status:', err.response.status);
            try {
                console.error('Body:', JSON.stringify(err.response.data, null, 2));
            } catch (e) {
                console.error('Body (raw):', err.response.data);
            }
        } else {
            console.error('Request error:', err.message);
        }
    }
})();