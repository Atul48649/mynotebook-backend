const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const app = require('./app');

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("DB Connected Successfully!!!");
});

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`);
})