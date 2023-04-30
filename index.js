const express = require('express');
const app = express();
const cors = require('cors'); // connect between port npm i cors
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors()); // connect between port npm i cors

app.get('/', (req, res) => {
    res.send('Dragon Server is Running...')
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews);   
});

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
});