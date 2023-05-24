const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username !"],
        minLength: [3, "Username must be at least 3 characters !"],
        maxLength: [8, "Username cant be more than 8 characters !"]
    },
    answers: {
        type: String,
        score: ''
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;