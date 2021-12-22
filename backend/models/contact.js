const mongoose = require('mongoose');
const User = require('./user');

const contactSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phoneNumber: {type: String, required: true, unique:true},
    phoneOperator: {type: String, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: User, default: null },
    creationDate: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Contact', contactSchema);