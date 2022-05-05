const mongoose = require('mongoose');

const {MONGO_URI} = process.env;

exports.connect = () => {

    mongoose.connect(MONGO_URI ,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to database");
    }).catch((err) => {
        console.log("Error connected to database");
        console.log(err)
        process.exit(1);
    });
}