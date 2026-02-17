const express = require('express');
const words = express.Router();

words.get('/', (req, res) =>{
    res.send('Word Homepage');
});

words.get('/wotd', (req, res) =>{
    res.send('Here is the word of the day')
});

module.exports = words;