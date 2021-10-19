const express = require("express");
const multer = require("multer");
const path = require("path");
const UserInfo = require("../models/userInfo");

const router = express.Router();

const DIR = "../client/src/images/person";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.get("/admin", (req, res) => {
  res.json("here");
});

router.post("/admin", upload.single("photo"), (req, res) => {
  console.log("here person", req.files);
  console.log("oiiiiiiiiiii", req.body);

  const userInfo = new UserInfo({
    fullname: req.body.fullname,
    description: req.body.description,
    photo: req.body.photo,
    college: req.body.college,
    highschool: req.body.highschool,
    school: req.body.school,
    expertise: req.body.expertise,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  userInfo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
