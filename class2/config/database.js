const mongoose = require("mongoose");

//install ditenv
require("dotenv").config();

//install mongoose
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("DB connected successfully"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect