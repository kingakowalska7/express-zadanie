const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

const User = require('./models/UserModel')

mongoose.connect("mongodb://127.0.0.1:27017/akademia");
const userController = require('./controllers/userController')

app.use("/files", express.static("public"));

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

 app.get("/mongoose/:id", function (req, res) {
   User.findById(req.params.id).exec((err, user)=>{

     if(err) {
      res.send(err)
    }
     res.render("home", {
       name: user.name,
       adress: user.address,
       email: user.email,
     });
   })
 });

 app.get("/", function (req, res) {
  res.render("home", {
     title: "My app title",
    content: "Lorem ipsum",
     displayTitle: true,
     
   });
 });

app.get('/users', userController.index)

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});













