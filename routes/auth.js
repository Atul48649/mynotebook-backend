const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userSchema = require('../validation/userSchema');
const validateSchema = require('../middlewares/validateSchema')
const bcryptjs = require('bcryptjs')

router.post('/createUser', validateSchema(userSchema), async (req, res) => {
    try {
        const data = await User.find({ email: req.body.email })
        if (data.length !== 0) {
            res.status(400).json({
                message: "This email has already been registered please use new email."
            })
        }

        const { name, email, password } = req.body;
        const salt = await bcryptjs.genSalt(10);
        const secretPassword = await bcryptjs.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: secretPassword
        });
        res.status(200).json({
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;