const mongoose = require("mongoose");


const connectDB = (uri) =>{
    console.log("Database is connected");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
};

module.exports = connectDB;