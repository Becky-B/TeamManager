const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: { type: String ,
    minlength: [2, "**Must be more than 2 characters long"]},
    position: { type: String }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);