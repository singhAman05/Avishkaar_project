//aquring mongoose to access database mongoDb
const mongoose = require("mongoose");

//connecting mongoose to database by localhost
mongoose
  .connect("mongodb://localhost:27017/users") //It eill return promise
  //if connected successfully then THEN part will execute
  .then(() => {
    console.log("Database is connected Successfully :)");
  })
  //if not connected successfully then catch part will execute
  .catch((err) => {
    console.log("Oops cannot connect the Database :(");

    //publishig err on terminal
    console.log(err);
  });
