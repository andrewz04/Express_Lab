const express = require('express');
const router = express.Router();
const {readFile,writeFile} = require('fs').promises; // destructuring 

router.get('/', (req, res) =>{
    res.send('Word Homepage');
});

router.get('/wotd', async(req, res) =>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    
    res.render('wotd',{word: word, part, definition});
});

router.get('/allwords', async(req,res) => {
    let allWordsArray = await getAllWords();

    let mappedWords = allWordsArray.map(line =>{
        let [word, part, definition] = line.split('\t');
        return {word, part, definition}
    });
    
    res.render('allwords',{allWords: mappedWords});

});

let getWordFromDictionary = async ()=> {
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;

    } 
    catch (err){
        console.log("There was an error reading the file:" ,err);
        return [];
    }

};

let getAllWords = async() => {
    try {
        const data = await readFile('resources/allwords.txt','utf8');
        let lines = data.split('\n');

        return lines;

    } catch (err) {
        console.log("There was an error reading the file:" , err);
    }

};


module.exports = router;