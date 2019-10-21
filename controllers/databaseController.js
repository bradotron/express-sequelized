var db = require("../models");

db.sequelize.sync().then(() => {
  console.log("Sequelize sync() completed");
});

const controller = {
  createUser: name => {
    return db.User.create({ name: name });
  },

  getUsers: db.User.findAll()
};

module.exports = controller;
