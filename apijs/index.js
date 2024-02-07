const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

let jsonData; // Declare a variable to store the data

async function loadData() {
  try {
    const filePath = 'elementsV2.json';
    const fileContent = await fs.readFile(filePath, 'utf8');
    jsonData = JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading or parsing file:', error.message);
    process.exit(1); // Exit the process if there's an error loading the data
  }
}

// Load the data at the start
(async () => {
  await loadData();
})();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/symbol/:symbol', (req, res) => {
  const symbol = req.params.symbol;

  const foundItem = jsonData.find(item => item.symbol === symbol);

  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).send('Symbol not found');
  }
});

app.get('/all', (req, res) => {
  // Send the data loaded at the start
  if (jsonData) {
    res.json(jsonData);
  } else {
    res.status(500).send('Error loading data');
  }
});

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
