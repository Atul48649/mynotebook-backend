const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', require('./routes/index'));

app.get('/', (req, res) => {
    res.send("Hello World!!!")
})

module.exports = app;