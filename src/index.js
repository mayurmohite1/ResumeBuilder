const express = require("express");
const pasth = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const { exec } = require("child_process");

const app = express();

//convert data to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static("public")); // to include css files from public folder

//use ejs as the view engine
app.set("view engine", "ejs");
// static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// Register user
app.post("/signup", async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  //check if user is already exist
  const existingUser = await collection.findOne({ username: data.username });

  if (existingUser) {
    res.send("User already exists.Please choose different username.");
  } else {
    //hash the password using bcrypt
    const saltRounds = 10; //number of salt rounds fro bcrypt

    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword; //replace hash password with original password
    const userdata = await collection.insertMany(data);
    console.log(userdata);
  }
});

//login user

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ username: req.body.username });
    if (!check) {
      res.send("Username cannot be found");
      setTimeout(() => {
        // Restart the server using nodemon
        exec("nodemon restart", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error restarting server: ${error}`);
          }
        });
      }, 2000);
      return;
    }

    // compare hash password from database using bcrypt.compare
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );

    if (isPasswordMatch) {
      res.render("templates");
    } else {
      res.send("Wrong password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

//Redirect to select your template
/*app.get("/templates", (req, res) => {
  res.render("templates");
});*/

//Redirect to Template 1
app.get("/template1", (req, res) => {
  res.render("template1");
});

//Redirect to Template 2
app.get("/template2", (req, res) => {
  res.render("template2");
});

//Redirect to Template 3
app.get("/template3", (req, res) => {
  res.render("template3");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
