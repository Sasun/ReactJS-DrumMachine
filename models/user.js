"use strict";

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

//User Schema -------------------------------------------------------
var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
        meta: {
            age: Number,
            website: String
        },
    created_at: Date,
    updated_at: Date
});

//User methods -----------------------------------------------------
userSchema.methods.addSmiles = function(){
    return this.name += '- :) :)';
}

//export model -----------------------------------------------------
module.exports = mongoose.model('User', userSchema);