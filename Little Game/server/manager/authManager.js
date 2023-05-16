const User = require('../models/User');

exports.usernameChecker = (username) => User.findOne({ username });

exports.creteUser = async (username) => {

    try {
        const newUser = await User.create({ username });

        return newUser
    } catch(error) {
        console.log(error.message);
    }
};