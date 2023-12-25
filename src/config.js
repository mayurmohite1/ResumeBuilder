const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0/resumebuilder");

//check database connection

connect
  .then(() => {
    console.log("Database connection established");
  })

  .catch(() => {
    console.log("Database connection failed");
  });

//Create Schema

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//collection part

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
