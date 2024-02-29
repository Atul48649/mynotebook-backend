const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(200).json({
        data: user
    })
})

module.exports = router;