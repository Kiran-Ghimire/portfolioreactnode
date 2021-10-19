const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserInfo = require("./models/userInfo");
const app = express();

const addInfo = require("./routes/addInfo.js");
const addProjects = require("./routes/addProjects.js");

const dbURI =
  "mongodb+srv://N4scento:AAmy2QBTulNPGci8@portfolioreactnode.utodh.mongodb.net/node-portfolio?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(8888, () => {
      console.log("This is our running server");
    })
  )
  .catch((err) => console.log(err));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:8888"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// app.get("/admin", (req, res) => {
//   res.json({ Hi: "Bye" });
// });
// app.use(express.urlencoded({ extended: true }));
app.use(addInfo);
app.use(addProjects);

// app.get("/add-info", (req, res) => {
//   const userInfo = new UserInfo({
//     fullname: "kiran ghimire",
//     description: "Hi I am kiran Ghimire",
//   });
//   userInfo
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-info", (req, res) => {
//   UserInfo.findById()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get("/all-info", (req, res) => {
//   UserInfo.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });
