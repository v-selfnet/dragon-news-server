const express = require('express');
const app = express();
const cors = require('cors'); // connect between port npm i cors
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors()); // connect between port npm i cors

app.get('/', (req, res) => {
    res.send('Dragon Server is Running...')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})