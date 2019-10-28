var db = require("../models");

const controller = {
  createUser: name => {
    return db.User.create({ name: name })
  },

  getUsers: () => {
    return db.User.findAll()
  }
};

module.exports = controller;
