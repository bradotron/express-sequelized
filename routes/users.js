var express = require("express");
var router = express.Router();

const dbController = require("../controllers/databaseController");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(dbController.getUsers);
});

router.post("/:name", function(req, res, next) {
  console.log("trying to create a user " + req.params.name);
  res.json(dbController.createUser(req.params.name));
});

module.exports = router;
