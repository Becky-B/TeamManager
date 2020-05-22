const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const AllPlayers = require('./server/routes/player.routes');
AllPlayers(app);

app.listen(1336, () => {
    console.log("You're listening to 1336, now go away")
})