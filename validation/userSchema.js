const joi = require('joi');

const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(6).required(),
    password: joi.string().min(8).required()
})

module.exports = userSchema;