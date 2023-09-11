const axios = require('axios');

const fetchStockData = async () => {
    try {
      const response = await axios.get('https://mock-api-virid.vercel.app/api/getStockMovers');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {
  fetchStockData,
};


