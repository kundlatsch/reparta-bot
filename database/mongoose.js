const mongoose = require("mongoose");

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            maxPoolSize: 50,
            connectTimeoutMS: 10000
        };

        const username = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;

        mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.i8yoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);

        mongoose.connection.on("connected", () => console.log("The bot has connected to the database"));
        mongoose.connection.on("disconnected", () => console.log("The bot has disconnected to the database"));
        mongoose.connection.on("err", () => console.log("Some error ocurred while connecting to the database: " + err));
    }
}