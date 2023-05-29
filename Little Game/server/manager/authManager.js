const User = require('../models/User');

exports.usernameChecker = (username) => User.findOne({ username });

exports.deleteUser = (id) =>  User.findOneAndDelete(id);

exports.createUser = async (username) => {

    try {
        const newUser = await User.create({ username });

        return newUser
    } catch(error) {
        const filterError = error.errors.username.message;
        
        throw (filterError);
    }
};

