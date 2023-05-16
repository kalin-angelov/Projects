const { usernameChecker, createUser } = require('../manager/authManager');

exports.postUser = async (req, res) => {
    const { username } = req.body;

    const existingUsername = await usernameChecker(username);

    if (existingUsername) {
        return {error: "Username Already Exists !"};
    };

    try {
        await createUser(username);
    } catch(error) {
        console.log(error.message);
    };
};