const mongoose = require('mongoose');
const Contact = require('./contact');
const User = require('./user');

const messageSchema = mongoose.Schema({
    content: {type: String, require: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: User, default: null},
    number: {type: mongoose.Schema.Types.ObjectId, ref: Contact, require: true, default: null},
    creationDate: { type: Date, default: Date.now },
    isSent: {type: Boolean, default: false},
    connection_direction: {type: Boolean, default: true}
     // à true lorsque le msg est envoyé par le user au contact et false pour l'inverse.
});


module.exports = mongoose.model('Message', messageSchema);