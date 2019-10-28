var express = require("express");
var router = express.Router();

const dbController = require("../controllers/databaseController");

/* GET users listing. */
router.get("/", function(req, res, next) {
  dbController.getUsers().then(result => {
    console.log(result);
    res.json(result);
  }).catch(error => {
    console.log(error);
    res.json(error);
  });
});

/* Create a user */
router.post("/:name", function(req, res, next) {
  dbController.createUser(req.params.name).then(result => {
    console.log(result);
    res.json(result);
  }).catch(error => {
    console.log(error);
    res.json(error);
  })
});

module.exports = router;
