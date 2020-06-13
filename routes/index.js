var express = require('express');
var router = express.Router();

var User = require('../models/user');


/* GET home page. */
router.get('/', function (req, res) {
  // res.render('index', { title: 'Express' });
  res.json({ status: "OK", msg: "Running..." });
});

router.post('/register', function (req, res) {
  if (req.body.userName && req.body.userEmail && req.body.password) {
    var head_Details = new User({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      password: req.body.password
    });
    head_Details.save(function (saveErr, saveResult) {
      if (saveErr || !saveResult) {
        res.json({ status: "ERROR", msg: "Getting issue." });
      } else {
        res.json({ status: "OK", msg: "User saved successfully", data: saveResult });
      }
    });
  } else {
    res.json({ status: "ERROR", msg: "Please enter all valid details." })
  }
});


router.post('/login', function (req, res) {
  if (req.body.userName && req.body.password) {
    User.findOne({ userName: req.body.userName }, function (err, data) {
      if (err || !data) {
        res.json({ status: "ERROR", msg: "User not found." })
      } else {
        if (data.password == req.body.password) {
          res.json({ status: "OK", msg: "User successfully login.", data: data })
        } else {
          res.json({ status: "ERROR", msg: "Wrong password!." })
        }
      }
    })
  } else {
    res.json({ status: "ERROR", msg: "Please enter all valid details." })
  }
});










module.exports = router;
