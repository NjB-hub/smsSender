const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phoneNumber: {type: String, required: true, unique: true},
    country: {type: String, required: true},
    password: {type: String, required:true},
    photo: {type: String},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);