const express = require("express");
const app = express(); //calling express as a function

app.set('view engine', 'ejs');

app.get('/' ,(req, res) => {
    console.log('here');
    res.render('index', {userName: 'Andrew'});
});

app.get('/status', (req, res) =>{
    res.Status(500).send('hi');
});

app.listen(3030)