const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Notes = mongoose.Model('Notes', notesSchema);

module.exports = Notes;