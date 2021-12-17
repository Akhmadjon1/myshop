const fs = require("fs");
const express = require("express");
const router = express.Router();

// create data for our server
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

router.get("/", (req, res) => {
  res.render("education");
});
router.get("/author", (req, res) => {
  res.render("home", { user: user });
});


module.exports = router;
