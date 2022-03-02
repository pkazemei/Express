const Jokes = require("../models/model");

module.exports.getAllJokes = (req, res) => {
    Jokes.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
		.then(singleJoke => res.json({ jokes: singleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
    .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateJoke => res.json({ jokes: this.updateJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomJoke = (req, res) => {
    console.log('trying to find a random joke');
    
    function getRandomInt(max){
        return Math.floor(Math.random()*max);
    }

    Jokes.find()
        .then(allJokes => {
            let randomIndex= getRandomInt(allJokes.length)
            res.json({ results: allJokes[randomIndex] })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};