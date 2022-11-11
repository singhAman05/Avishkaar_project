// requirng express in project
const express = require("express");
const validator = require("validator");
const hbs = require("hbs");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const session = require("express-session");
const nodemalier = require("nodemailer");

//this line of code process prot no in any computer
const port = process.env.PORT || 3000;

//defining a variable to use express
let app = express();

//aquiring databse to our main server file
require("./database/conn");

//adding variable to access database modules
const addUser = require("./models/signIn");

//to add css files in our project
let staticPath = path.join(__dirname, "../public");

//to add assets to our projects

//this line of code is use to host the the Html site
let templatePath = path.join(__dirname, "../templates/views");

//using all the required fields in our project
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.set("views", templatePath);
app.use(
  session({
    saveUninitialized: false,
    secret: "new-project",
    resave: false,
  })
);

// console.log(path.join(__dirname, "../public"));

//--------------------------------------------------------------------------------------------------------------------------

//root folder
app.get("/", async (req, res) => {
  const userName = "";
  const reroot = "";
  res.render("index", { userName: "Signup/Login", reroot: "/signup" });
});

//signup folder
app.get("/signup", (req, res) => {
  res.render("signup", { alert: "", email: "" });
});

//login folder
app.get("/login", (req, res) => {
  res.render("login", { alert: "" });
});

//profile
app.get("/profile-page", async (req, res) => {
  const userProfile = await addUser.findById({ _id: req.session.usrid });
  // console.log(userProfile);
  res.render("profile", {
    name: userProfile.uname,
    usremail: userProfile.email,
    num: userProfile.num,
    usrname: userProfile.name,
    addre: userProfile.addre,
  });
});

//contact
app.get("/contact", async (req, res) => {
  res.render("contact");
});

//getting all details that user have entered----------------------------------------------------------------------------
app.post("/api/signup", async (req, res) => {
  const emailMatch = await addUser.findOne({ email: req.body.email });
  const numMatch = await addUser.findOne({ num: req.body.num });
  try {
    if (req.body.pass !== req.body.reppass) {
      res.render("signup", {
        err: "",
        alert: "Password does not match",
        email: "",
      });
    } else if (!validator.isEmail(req.body.email)) {
      res.render("signup", {
        alert: "",
        email: "Invalid email id",
      });
    } else if (emailMatch) {
      res.render("signup", {
        alert: "",
        email: "Email-id already exists",
      });
    } else if (numMatch) {
      res.render("signup", {
        alert: "",
        email: "Number already exist",
      });
    } else {
      // console.log(emailMatch);
      const newUser = new addUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        rep_password: req.body.reppass,
        uname: req.body.uname,
        num: req.body.num,
        addre: req.body.addre,
      });

      //password hashing is going on

      //adding data to database
      newUser
        .save()
        .then(() => {
          console.log("user added succesfully :)");
        })
        .catch((err) => {
          console.log("oops :(");
          console.log(err);
          res.render("error");
        });

      //redirecting to login page
      const alert = "";
      res.render("login", { alert: "User added successfully" });
    }
  } catch (err) {
    res.render("error");
    console.log("oops something went wrong :(");
    console.log(err);
  }
});

//using credentials while loging in------------------------------------------------------------------------------------------------

app.post("/api/login", async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    const userEmail = await addUser.findOne({ email }); //since object and key are equal so we have to just pass one vaiable
    let isMatch = await bcrypt.compare(pass, userEmail.password);

    if (email !== userEmail.email) {
      res.render("login", { alert: "Invalid email-ID/password" });
    }

    if (!isMatch) {
      res.render("login", { alert: "Invalid email-ID/password" });
    } else {
      const userName = userEmail.name;
      const reroot = "";
      req.session.usrid = userEmail._id;
      res.render("index", { userName, reroot: "/profile-page" });
    }
  } catch (err) {
    res.render("error");
    console.log("oops can't login :(");
    console.log(err);
  }
});

//contact form API
app.post("/api/contact", async (req, res) => {
  try {
    const name = req.body.name;
    const message = req.body.message;
    const sendEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "no-reply@gmail.com",
        pass: "sah123123", // fake Password
      },
    });
    const mailOptions = {
      form: "itsharshofficial@gmail.com",
      to: req.body.email,
      cc: "itsharshofficial@gmail.com",
      text: "Thanks for sending your concern, We will try to reach you personly as soonas possible",
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.render("error");
      } else {
        res.redirect("index");
      }
    });
  } catch (err) {
    res.render("error");
    console.log(err);
  }
});

//----------------------------------------------------------------------------------------------------

//this will run the server at chosen port
app.listen(port, () => {
  console.log(`Running at port = ${port}`);
});
