const axios = require('axios');
require('dotenv').config();

const fetchData = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_MOVIES_API);
        console.log('Fetched Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
