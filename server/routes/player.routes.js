const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.get('/api/players/list', PlayerController.getAllPlayers);
    app.post('/api/players/addplayer', PlayerController.addPlayer);
}

