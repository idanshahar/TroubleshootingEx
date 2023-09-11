const express = require('express');
const path = require('path');
const httpClient = require('./http-client');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Set the view engine and views directory for HTML templates
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'templates'));

app.get('/', async (req, res) => {
  try {
    // Fetch stock data using the HTTP client
    const stockData = await httpClient.fetchStockData();
    console.log('API Response:', stockData);
    // Process and filter stock data to get the top 10 movers
  
    const topMovers = dataProcessing.getTopMovers(stockData);
    console.log('Top Movers:', topMovers);
    console.log('Top Movers:', topMovers);

    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

