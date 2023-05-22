const { usernameChecker, createUser } = require('../manager/authManager');

exports.postUser = async (req, res) => {
    const { username } = req.body;

    const existingUsername = await usernameChecker(username);

    try {
        if (existingUsername) {
            throw ("Username Already Exists !");
        };

        const user = await createUser(username);

        res.json(user);

    } catch(error) {
        res.status(400).send({ error: error })
    };
};