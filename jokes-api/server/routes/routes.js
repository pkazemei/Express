const JokesController = require("../controllers/controller");

module.exports = app => {
    app.get("/api/jokes/", JokesController.getAllJokes);
    app.get("/api/jokes/random", JokesController.getRandomJoke);
    app.post("/api/jokes/new", JokesController.createJoke);
    
    app.get("/api/jokes/:id", JokesController.getSingleJoke);
    app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteExistingJoke);
};

// It matters where you place the route, otherwise it won't work