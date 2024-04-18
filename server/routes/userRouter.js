const router = require("express").Router();
const { User } = require("../models/UserModel");

// GET route to fetch user data
router.get("/", async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({}, { name: 1, dob: 1, email: 1, password: 1 });

        // If no users found, send a 404 error
        if (!users || users.length === 0) {
            return res.status(404).send({ message: "No users found" });
        }

        // If users found, send the user data
        res.status(200).send({ data: users });
    } catch (error) {
        // If an error occurs, send a 500 error
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
