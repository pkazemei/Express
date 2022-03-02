const express = require('express'); 
const { ppid } = require('process');
// requires is another way of saying import

const app = express();
// app is an instance of express

const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// allows to read form information

let quotes = [
    {content:'It is not the mountains ahead that will wear you out, it is the pebble in your shoe.', author:'Muhammad Ali'},
    {content:'If you want love, do not hide from yourself', author:'Rumi'},
    {content:'Comparison is a thief of joy', author:'Theodore Roosevelt'},
    {content:'Fall down seven times, stand up eight', author:'Japanese Proverb'},
    {content:'You attract what you vibrate', author:'Abraham Hucks'},
    {content:'Wherever you go, there you are', author:'Eckhart Telle'}
]

// get all quotes
app.get('/api/quotes', (req, res)=>{
    res.json({count: quotes.length, results:quotes})
})

// get single quote
app.get('/api/quotes/:index', (req, res)=>{
    res.json({results: quotes[req.params.index]})
})

// add a new quote API
app.post('/api/quotes', (req, res)=>{
    console.log('req.body', req.body);
    quotes.push(req.body);
    res.json({msg:'success', results:quotes})
})

// update a quote
app.put('/api/quotes/:index', (req, res)=>{
    quotes[req.params.index] = req.body
    res.json({count: quotes.length, results: quotes})
})

app.delete('/api/quotes/:index', (req, res)=>{
    quotes.splice(req.params.index,1)
    res.json({count: quotes.length, results:quotes})
})

app.listen(port, () => console.log(`Listening on port: ${port}`));