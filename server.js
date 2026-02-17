const express = require("express");
const app = express(); //calling express as a function
const userRouter = require('/routes/user');
const wordRouter = require('/routes/words');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/users', userRouter);
app.use('/words', wordRouter);

app.get('/' ,(req, res) => {
    console.log('here');
    res.render('index', {userName: 'Andrew'});

});

app.listen(3030)