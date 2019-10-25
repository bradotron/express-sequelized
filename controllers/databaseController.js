var db = require("../models");

const controller = {
  createUser: name => {
    return db.User.create({ name: name });
  },

  getUsers: db.User.findAll()
};

module.exports = controller;
