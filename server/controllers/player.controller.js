const { Player } = require('../models/player.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err));
}

module.exports.addPlayer = (req, res) => {
    const {name, position} = req.body;
    Player.create({
        name, 
        position
    })
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}