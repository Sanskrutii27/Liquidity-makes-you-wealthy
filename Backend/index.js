const express = require("express");
require('./db/config');
const User = require("./db/User");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

app.use(express.json());  //creating route to consume api
app.use(cors()); //Cross-Origin Resource Sharing (CORS)

app.post("/register", async (req, resp) => {
    const { password, confirm_password } = req.body; // Extract password and confirm_password from the request body
    // Check if password and confirm_password match
    if (password !== confirm_password) {
        // If they don't match, return an error response
        return resp.status(400).send({ message: "Passwords do not match." });
    }
    let user = new User(req.body); // Proceed with creating the user since the passwords match
    try {
        let result = await user.save();
        result = result.toObject();
        delete result.password; // Ensure the password is not sent back in the response
        delete result.confirm_password; // confirm_password should also not be sent back
        resp.send(result);
    } catch (error) {
        if (error.code === 11000) {
            // This is the error code for a duplication error
            resp.status(400).send({ message: "Email, username, or mobile already exists." });
        } else {
            resp.status(500).send({ message: "Internal server error." });
        }
    }
})

app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        // Find the user by the provided credentials and exclude password and confirm_password
        let user = await User.findOne(req.body).select("-password -confirm_password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "No User Found" })
        }
    } else {
        resp.send({ result: "No User Found" })
    }
})

app.get('/forgotpassword', async (req, res) => {
    let { email, newPassword, confirm_Password } = req.query;
    email = email;
    try {
        const user = await User.findOne({ email }); // Find the user by email
        if (!user) {
            return res.status(404).send('User not found');
        }
        // Check if newPassword and confirmPassword match
        if (newPassword !== confirm_Password) {
            return res.status(400).send('New password and confirm password do not match');
        }
        // Update the password and confirmPassword fields
        user.password = newPassword;
        user.confirmPassword = confirm_Password;
        await user.save();

        res.status(200).send('Password updated successfully');
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(5000);