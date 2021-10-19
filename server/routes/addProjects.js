const express = require("express");
const multer = require("multer");
const path = require("path");
const Addproject = require("../models/addProjects");

const router = express.Router();

const DIR = "../client/src/images";

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

router.get("/admin/projects", (req, res) => {
  res.json("Hlo");
});

router.post("/admin/projects", upload.single("photo"), (req, res) => {
  console.log("here", req.file.path);
  const addProjects = new Addproject({
    description: req.body.description,
    projectname: req.body.projectname,
    photo: req.file.path,
  });
  console.log("body", req.body);
  addProjects
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
